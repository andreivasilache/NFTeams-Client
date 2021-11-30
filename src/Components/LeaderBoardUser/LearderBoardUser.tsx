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
    <img src={image} />
    <LeaderInfo>
      <div>{name}</div>
      <div className='skilsText'>{skils}</div>
      <div>{activity}</div>
    </LeaderInfo>
  </StyledBoard>
);

export default LeaderBoardUser;
