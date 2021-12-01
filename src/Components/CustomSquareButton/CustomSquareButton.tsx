import React from 'react';
import StyledCustomSquareButton from './StyledCustomSquareButton';
import { ReactComponent as CornerTop } from '../../assets/svg/corner-top.svg';
import { ReactComponent as CornerBottom } from '../../assets/svg/corner-bottom.svg';
import { ReactComponent as CornerBottomLeft } from '../../assets/svg/bottom-left.svg';
import { ReactComponent as CornerTopRight } from '../../assets/svg/top-right.svg';

interface Props {
  text: string;
  width?: string;
  isWithTopRight?: boolean;
  handleClick: () => void;
}

const CustomSquareButton = ({ text = '', handleClick, width = '82px', isWithTopRight = false }: Props) => (
  // @ts-ignore
  <StyledCustomSquareButton customWidth={width} onClick={handleClick}>
    {text}
    {!isWithTopRight && <CornerTop className='corner-top' />}
    {!isWithTopRight && <CornerBottom className='corner-bottom' />}
    {isWithTopRight && <CornerBottomLeft className='corner-bottom-left' />}
    {isWithTopRight && <CornerTopRight className='corner-top-right' />}
  </StyledCustomSquareButton>
);

export default CustomSquareButton;
