import React from 'react';
import StyledCustomButton from './StyledCustomButton';
import { ReactComponent as CustomButtonIcon } from '../../assets/svg/customButton.svg';

interface Props {
  buttonText: string;
  handleClick: () => void;
}

const CustomButton = ({ buttonText = 'test', handleClick }: Props) => (
  <StyledCustomButton onClick={handleClick}>
    <CustomButtonIcon />
    <div className='custom-button__text'>{buttonText}</div>
  </StyledCustomButton>
);

export default CustomButton;
