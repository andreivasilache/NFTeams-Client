import React from 'react';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import LeaderBoardItem from '../../../Components/LeaderBoardItem/LeaderBoardItem';
import StyledLeaderBoards from './StyledLeaderBoards';
import img1 from '../../../assets/png/img1.png';
import img2 from '../../../assets/png/img2.png';
import img3 from '../../../assets/png/img3.png';
import img4 from '../../../assets/png/img4.png';

const leaders = [
  {
    imgSrc: img1,
    name: 'Andrei Ungurean',
    items: 658,
  },
  {
    imgSrc: img2,
    name: 'Andrei Vasilache',
    items: 652,
  },
  {
    imgSrc: img3,
    name: 'Andreea Alexandra',
    items: 485,
  },
  {
    imgSrc: img4,
    name: 'Iulian Pranici',
    items: 355,
  },

  {
    imgSrc: img1,
    name: 'Cosmin Ailoaie',
    items: 298,
  },
  {
    imgSrc: img2,
    name: 'Cristi Vrabie',
    items: 198,
  },
];

const LeaderBoardsPreview = () => {
  const onFollowClick = (leader: any) => {
    console.log(leader);
  };

  return (
    <StyledLeaderBoards>
      <CustomCardHeader title='leaderboards' viewMoreRoute='' />
      <div className='list'>
        {leaders.map(leader => (
          <LeaderBoardItem
            key={leader.name}
            imgSrc={leader.imgSrc}
            name={leader.name}
            items={leader.items}
            onFollowClick={() => onFollowClick(leader)}
          />
        ))}
      </div>
    </StyledLeaderBoards>
  );
};

export default LeaderBoardsPreview;
