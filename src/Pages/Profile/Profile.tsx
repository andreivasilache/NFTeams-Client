import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import useAccountNFTS from '../../Hooks/useAccountNFTS';
// import useStore from '../../Hooks/useStore';
// import { WalletStore } from '../../Store/Wallet.store';
import { observer } from 'mobx-react-lite';

import StyledProfile, {
  Avatar,
  StyledBlock,
  Info,
  Paragraph,
  Text,
  SkilsWrapper,
  Skill,
  BadgesWrapper,
  Badges,
  Name,
  SubName,
  StylingElement,
  StyledPopup,
} from './StyledProfile';
// import InfoListElement from './InfoList/InfoList';
// import avatarPodium from '../../assets/png/avatarPodium.png';
import avatarPodium from '../../assets/svg/podium.svg'
import profileElement from '../../assets/svg/profileElement.svg';
import profileElement2 from '../../assets/svg/profileElement2.svg';

import codeIcon from '../../assets/png/codeIcon.png';
import socialIcon from '../../assets/png/socialIcon.png';
import healthIcon from '../../assets/png/healthIcon.png';
import karmaIcon from '../../assets/png/karmaIcon.png';

import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import { LoadingBar } from '../../Components/LoadingBar/LoadingBar';
import useStore from '../../Hooks/useStore';
import { CurrentFirebaseUserStore } from '../../Store/CurrentFirebaseUser.store';
import { SmartContractsStore } from '../../Store/SmartContracts.store';
import useQuery from '../../Hooks/useSearch';

export const Profile = observer(() => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const query = useQuery();
  const [firebaseUser, setFirebaseUser] = useState<any>({});
  const queryWallet = query.get('wallet');
  const queryID = query.get('id');

  const [badges, setBadges] = useState([]);

  const { currentUserData, getUserDataByID } = useStore('currentFirebaseUser') as CurrentFirebaseUserStore;
  const { skills } = firebaseUser || {};
  const fakeSkillsLimit = ((skills?.coding || 0) + (skills?.connection || 0) + (skills?.wellness || 0) + (skills?.karma || 0)) / 4;

  useEffect(() => {
    smartContractsStore.getNFTSOfWallet(queryWallet || undefined).then(assets => {
      const filteredBadges = assets.filter((asset: any) => asset.metadata.type === 'badge');
      filteredBadges.sort((a: any, b: any) => (a?.metadata?.name || '').localeCompare(b?.metadata?.name || ''));
      setBadges(filteredBadges);
    });

    if (queryID) {
      getUserDataByID(queryID).then(payload => {
        setFirebaseUser(payload);
      });
    } else {
      setFirebaseUser(currentUserData);
    }
  }, []);

  return (
    <WithAppLayout>
      <StyledProfile>
        {firebaseUser?.profilePicture && (
          <Avatar>
            <img className='avatar-podium' src={avatarPodium} />
            <img className='avatar' src={firebaseUser?.profilePicture?.imageURL} />
          </Avatar>
        )}

        <Info>
          {firebaseUser?.profilePicture && (
            <>
              <Name>{firebaseUser?.profilePicture?.metadata?.name}</Name>
              <SubName>{firebaseUser?.profilePicture?.metadata?.description}</SubName>
            </>
          )}
          <Text>
            {firebaseUser?.profileBio && (
              <>
                <img src={profileElement} />
                <StyledBlock>
                  <Paragraph dangerouslySetInnerHTML={{ __html: firebaseUser?.profileBio }} />

                  <StylingElement src={profileElement2} />
                </StyledBlock>
              </>
            )}
          </Text>
          <SkilsWrapper>
            <Skill>
              <StyledPopup content='Code' trigger={<img src={codeIcon} alt='code' />} position='right center' />
              <LoadingBar currentValue={skills?.coding || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Connection' trigger={<img src={socialIcon} />} position='right center' />
              <LoadingBar currentValue={skills?.connection || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Wellness' trigger={<img src={healthIcon} />} position='right center' />
              <LoadingBar currentValue={skills?.wellness || 0} limit={fakeSkillsLimit} />
            </Skill>
            <Skill>
              <StyledPopup content='Karma' trigger={<img src={karmaIcon} />} position='right center' />
              <LoadingBar currentValue={skills?.karma || 0} limit={fakeSkillsLimit} />
            </Skill>
          </SkilsWrapper>
        </Info>

        <BadgesWrapper>
          <Badges>
            {badges.map((badge: any) => (
              <img className='badge' src={badge?.imageURL} key={badge?.imageURL} />
            ))}
          </Badges>
        </BadgesWrapper>
      </StyledProfile>
    </WithAppLayout>
  );
});
