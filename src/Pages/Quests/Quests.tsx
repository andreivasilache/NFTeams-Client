import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from '@firebase/auth';
import { observer } from 'mobx-react-lite';

import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import Quest from '../../Components/Quest/QuestComponent';
import StyledQuests, { ItemGrid, LeadboardsFilters, LeadboardsItem, QuestButton, QuestPoints, QuestsItem } from './StyledQuests';
import ButtonStyle from '../../assets/svg/questsButton.svg';
import { icons, Points } from '../../Components/Quest/Points/Points';
import { leadFilters } from '../../__mocks__/leaderboardsFilters';
import LeaderBoardUser from '../../Components/LeaderBoardUser/LearderBoardUser';
import LeaderPhoto from '../../assets/png/leaderboardDemo.png';
import questFilter from '../../assets/svg/questFilter.svg';
import useStore from '../../Hooks/useStore';
import QuestsStore from '../../Store/Quests.store';
import getAllUsers from '../../Shared/firebase/getAllUsers';
import CreateQuest from '../../Components/Modals/ActionModal/CreateQuest';
import SetWinnersOfQuest from '../../Components/Modals/SetWinnersOfQuest/SetWinnersOfQuest';
import useCoins from '../../Hooks/useCoints';
import { SmartContractsStore, SMART_CONTRACTS_ENUM } from '../../Store/SmartContracts.store';

const filters = [
  {
    key: 'past',
    label: 'Past',
  },
  {
    key: 'active',
    label: 'Active',
  },
];

export const Quests = observer(() => {
  const windowHeight = window.innerHeight - 120;
  const [activeFilter, setActiveFilter] = useState<'past' | 'active'>('active');
  const { quests, toggleUserQuestStatus, rewardPlayers } = useStore('questsStore') as QuestsStore;
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const [leaderBoardUsers, setLeaderBoardUsers] = useState([]);
  const [isAddingQuest, setIsAddingQuest] = useState(false);
  const [currentSelectingWinnersQuest, setCurrentSelectingWinnersQuest] = useState<any>(null);
  const userEmailRef = useRef<any>({});
  const { giveCoinsToAddresses } = useCoins();

  const [user] = useAuthState(getAuth());

  const loadLeaderBoard = async () => {
    const users: any = await getAllUsers();
    users.forEach((user: any) => {
      userEmailRef.current[user.email] = { id: user.id, wallet: user.wallet };
    });

    users.sort((a: any, b: any) => b.numberOfWonQuests - a.numberOfWonQuests);
    setLeaderBoardUsers(users);
  };

  useEffect(() => {
    loadLeaderBoard();
  }, []);

  return (
    <WithAppLayout>
      <StyledQuests>
        <CreateQuest isModalOpen={isAddingQuest} onCloseModal={() => setIsAddingQuest(false)} />
        <SetWinnersOfQuest
          currentQuest={currentSelectingWinnersQuest}
          isModalOpen={Boolean(currentSelectingWinnersQuest)}
          onCloseModal={() => setCurrentSelectingWinnersQuest(null)}
          onQuestEnd={winners =>
            rewardPlayers({
              winnersEmails: winners,
              quest: currentSelectingWinnersQuest,
              userEmailToDataMap: userEmailRef.current,
              giveCoinsToAddressInstance: giveCoinsToAddresses,
              awardNFTInstance: smartContractsStore.getContractByKey(SMART_CONTRACTS_ENUM.GENERATE_NFT).awardMultipleWallets,
            }).then(() => {
              loadLeaderBoard();
            })
          }
        />
        <Grid container columns={10} columnSpacing={3}>
          <ItemGrid item xs={6}>
            <QuestsItem height={windowHeight - 64}>
              <div className='questsText'>Quests</div>
              <QuestButton>
                <img src={ButtonStyle} alt='' />
                <button type='button' className='buttonStyle' onClick={() => setIsAddingQuest(true)}>
                  Create
                </button>
              </QuestButton>

              <div className='quests__filters'>
                {filters.map(filter => (
                  <div
                    className={`quests__filter ${filter.key === activeFilter ? 'quests__filter--active' : ''}`}
                    key={filter.key}
                    onClick={() => setActiveFilter((filter as any).key)}
                  >
                    {filter.label}
                  </div>
                ))}
                <img src={questFilter} />
              </div>

              {quests.map((quest: any) => (
                <Quest
                  key={quest.title}
                  questName={quest.title}
                  questParticipants={quest.participants?.length || 0}
                  questDescription={quest.description}
                  questFocus={quest.mainLabel}
                  coinsWon={quest.coins}
                  awardItem={{
                    title: quest.awardItem.metadata.keyvalues.name,
                    imgSrc: `https://gateway.pinata.cloud/ipfs/${quest.awardItem.ipfs_pin_hash}`,
                  }}
                  isParticipantOfQuest={!(quest?.participants).includes(user.email)}
                  toggleUserStatusOfQuest={isParticipating =>
                    toggleUserQuestStatus(quest.id, user.email, quest.participants || [], isParticipating)
                  }
                  onFinish={() => setCurrentSelectingWinnersQuest(quest)}
                >
                  <QuestPoints>
                    {quest?.skillsAward?.coding && <Points icon={icons.code} points={quest?.skillsAward?.coding} />}
                    {quest?.skillsAward?.wellness && <Points icon={icons.health} points={quest?.skillsAward?.wellness} />}
                    {quest?.skillsAward?.connection && <Points icon={icons.social} points={quest?.skillsAward?.connection} />}
                    {quest?.skillsAward?.karma && <Points icon={icons.karma} points={quest?.skillsAward?.karma} />}
                  </QuestPoints>
                </Quest>
              ))}
            </QuestsItem>
          </ItemGrid>

          <ItemGrid item xs={4}>
            <LeadboardsItem height={windowHeight - 64}>
              <div className='leadboardsText'>Leaderboards</div>

              <LeadboardsFilters>
                {leadFilters.map(elemnt => (
                  <img key={elemnt} src={elemnt} />
                ))}
              </LeadboardsFilters>

              {leaderBoardUsers.map((user: any) => (
                <LeaderBoardUser
                  key={user.email}
                  image={user?.profilePicture?.imageURL || LeaderPhoto}
                  name={user.email}
                  skils=''
                  activity={user.numberOfWonQuests}
                />
              ))}
            </LeadboardsItem>
          </ItemGrid>
        </Grid>
      </StyledQuests>
    </WithAppLayout>
  );
});
