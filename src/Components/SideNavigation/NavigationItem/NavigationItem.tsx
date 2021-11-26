import React from 'react';
import StyledNavigationItem from './StyledNavigationItem';

interface Props {
  NavImage: any;
  label: string;
  onClickItem: Function;
  isActive: boolean;
}

const NavigationItem = ({ NavImage, label = '', onClickItem, isActive = false }: Props) => (
  <StyledNavigationItem onClick={() => onClickItem()} color={isActive ? '#7EFACD' : '#364659'}>
    <NavImage backgroundColor={isActive ? '#7EFACD' : undefined} isActive={isActive} />
      <span className='navigation-label'>{label}</span>
  </StyledNavigationItem>
);

export default NavigationItem;
