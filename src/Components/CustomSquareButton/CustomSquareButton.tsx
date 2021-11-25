import React from 'react';
import StyledCustomSquareButton from './StyledCustomSquareButton';
import { ReactComponent as CornerTop } from '../../assets/svg/corner-top.svg';
import { ReactComponent as CornerBottom } from '../../assets/svg/corner-bottom.svg';

interface Props {
  text: string;
  width?: string;
  handleClick: () => void;
}

const CustomSquareButton = ({ text = '', handleClick, width = '82px' }: Props) => (
  // @ts-ignore
  <StyledCustomSquareButton customWidth={width} onClick={handleClick}>
    {text}
    <CornerTop className='corner-top' />
    <CornerBottom className='corner-bottom' />
  </StyledCustomSquareButton>
);

export default CustomSquareButton;
