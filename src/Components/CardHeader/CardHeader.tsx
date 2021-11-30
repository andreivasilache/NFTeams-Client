import React from 'react';
import { useHistory } from 'react-router';
import StyledCardHeader from './StyledCardheader';

interface Props {
  title: string;
  viewMoreRoute: string;
}

const CustomCardHeader = ({ title = 'Header', viewMoreRoute }: Props) => {
  const history = useHistory();
  const onNavigateTo = (route: string) => {
    history.push(route);
  };

  return (
    <StyledCardHeader>
      <div className='header__title'>{title}</div>
      <div className='header__view-more' onClick={() => onNavigateTo(viewMoreRoute)}>
        {' '}
        View more
      </div>
    </StyledCardHeader>
  );
};

export default CustomCardHeader;
