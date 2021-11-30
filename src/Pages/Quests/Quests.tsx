import React, { useState } from 'react';
import { Grid } from '@mui/material';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';
import Quest from '../../Components/Quest/QuestComponent';
import StyledQuests, { ItemGrid, LeadboardsFilters, LeadboardsItem, QuestButton, QuestPoints, QuestsItem } from './StyledQuests';
import ButtonStyle from '../../assets/svg/questsButton.svg'
import { icons, Points } from '../../Components/Quest/Points/Points';
import { leadFilters } from '../../__mocks__/leaderboardsFilters';
import LeaderBoardUser from '../../Components/LeaderBoardUser/LearderBoardUser';
import LeaderPhoto from '../../assets/png/leaderboardDemo.png';
import questFilter from '../../assets/svg/questFilter.svg'

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

export const Quests = () => {
  const windowHeight = window.innerHeight - 120;
  const [activeFilter, setActiveFilter] = useState<'past' | 'active'>('active');
  const questSummary = "Description text Description text Description text Description text Description text Description text";


  return (
    <WithAppLayout>
      <StyledQuests>

        <Grid container columns={10} columnSpacing={3}>

          <ItemGrid item xs={6}>
            <QuestsItem height={windowHeight - 64}>
              <div className='questsText'>Quests</div>
              <QuestButton>
                <img src={ButtonStyle} alt="" />
                <button type='button' className='buttonStyle' >Create</button>
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

                <Quest questName='Bim Competition 2021' questParticipants={20} questDescription={questSummary} questFocus='Karma' coinsWon={21}>
                  <QuestPoints>
                    <Points icon={icons.health} points={5} />
                    <Points icon={icons.code} points={3} />
                    <Points icon={icons.social} points={1} />
                  </QuestPoints>
                </Quest>

            </QuestsItem>
          </ItemGrid>

          <ItemGrid item xs = {4}>
            <LeadboardsItem height={windowHeight - 64}>
              <div className='leadboardsText'>Leaderboards</div>
              
              <LeadboardsFilters>
                {leadFilters.map((elemnt) => (<img key={elemnt} src={elemnt} />))}
              </LeadboardsFilters>

              <LeaderBoardUser image={LeaderPhoto} name = "Alena Mango" skils = "433 codding" activity = "Daily likes" />

            </LeadboardsItem>
          </ItemGrid>

        </Grid>

      </StyledQuests>
    </WithAppLayout>
  );
}
