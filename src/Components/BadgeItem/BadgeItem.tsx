import React from 'react';
import StyledBadgeItem from './StyledBadgeItem';

interface Props {
  imgUrl: string;
  title: string;
}

const BadgeItem = ({ imgUrl = '', title = '' }: Props) => (
  <StyledBadgeItem>
    <img src={imgUrl} alt='badge' />
    <div className='badge__title'>{title}</div>
  </StyledBadgeItem>
);

export default BadgeItem;
