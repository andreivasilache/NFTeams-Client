import React from 'react';
import StyledNavigationItem from './StyledNavigationItem';

interface Props {
  NavImage: any;
  label: string;
  onClickItem: Function;
  isActive: boolean;
}

const NavigationItem = ({ NavImage, label = '', onClickItem, isActive = false }: Props) => (
  <StyledNavigationItem onClick={() => onClickItem()} color={isActive ? '#fff' : '#364659'}>
    <NavImage backgroundColor={isActive ? '#fff' : undefined} />
    <span className='navigation-label'>{label}</span>
  </StyledNavigationItem>
);

export default NavigationItem;
