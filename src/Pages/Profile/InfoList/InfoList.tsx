import React from 'react';
import StyledInfoListElement from './StyledInfoList';

interface Props {
  detail: string;
}

const InfoListElement = ({ detail = '' }: Props) => (
  <StyledInfoListElement>
    <span className='info'>info</span>
    <span className='detail'>{detail}</span>
  </StyledInfoListElement>
);

export default InfoListElement;
