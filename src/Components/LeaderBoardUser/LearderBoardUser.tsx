import React from 'react';
import StyledBoard, { LeaderInfo } from './StyleBoard';

interface props {
  image: string;
  name: string;
  skils: string;
  activity: string;
}

const LeaderBoardUser = ({ image, name, skils, activity }: props) => (
  <StyledBoard>
    <img width='50' height='50' src={image} />
    <LeaderInfo>
      <div className='name'>{name}</div>
      <div className='skilsText'>{skils}</div>
      <div>{activity}</div>
    </LeaderInfo>
  </StyledBoard>
);

export default LeaderBoardUser;
