import React from 'react';
import StyledBadgeItem from './StyledBadgeItem';

interface Props {
  imgUrl: string;
  title: string;
  onBadgeClick: () => void;
  setImageRef: Function;
  isActive: boolean;
}

const BadgeItem = ({ imgUrl = '', title = '', isActive, onBadgeClick, setImageRef }: Props) => (
  <StyledBadgeItem>
    <img
      src={imgUrl}
      alt='badge'
      className={isActive ? 'badge badge--active' : 'badge'}
      onClick={onBadgeClick}
      ref={isActive ? newRef => setImageRef(newRef) : null}
    />
    <div className='badge__title'>{title}</div>
  </StyledBadgeItem>
);

export default BadgeItem;
