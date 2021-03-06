import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import LeaderBoardItem from '../../../Components/LeaderBoardItem/LeaderBoardItem';
import StyledLeaderBoards from './StyledLeaderBoards';
import mockProfileImage from '../../../assets/png/img4.png';
import getAllUsers from '../../../Shared/firebase/getAllUsers';
import { SmartContractsStore } from '../../../Store/SmartContracts.store';
import useStore from '../../../Hooks/useStore';
import { ROUTES } from '../../../Shared/constants/Routes';

const LeaderBoardsPreview = () => {
  const [users, setUsers] = useState<any>([]);
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const history = useHistory();

  const loadAccountsAssets = async () => {
    const users = await getAllUsers();
    const promises: any = [];

    users.forEach((user: any) => promises.push(smartContractsStore.getNFTSOfWallet(user.wallet)));
    const response = await Promise.all(promises);
    users.forEach((user: any, index: number) => {
      user.nfts = response[index];
    });

    users.sort((a: any, b: any) => b.nfts.length - a.nfts.length);

    setUsers(users);
  };

  useEffect(() => {
    loadAccountsAssets();
  }, []);

  const onFollowClick = (leader: any) => {
    console.log(leader);
  };

  return (
    <StyledLeaderBoards>
      <CustomCardHeader title='leaderboards' viewMoreRoute='/quests' />
      <div className='list'>
        {users.map((user: any) => (
          <LeaderBoardItem
            key={user?.email || ''}
            imgSrc={user?.profilePicture?.imageURL || mockProfileImage}
            name={user?.email || ''}
            items={user?.nfts?.length || '0'}
            onFollowClick={() => onFollowClick(user)}
            onEmailClick={() => history.push({ pathname: ROUTES.profile, search: `?id=${user?.id}&wallet=${user.wallet}` })}
          />
        ))}
      </div>
    </StyledLeaderBoards>
  );
};

export default LeaderBoardsPreview;
