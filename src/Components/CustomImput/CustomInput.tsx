import React from 'react';
import StyledCustomInput from './StyledCustomInput';
import searchImg from '../../assets/svg/search.svg';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const CustomInput = ({ value, onChange }: Props) => (
  <StyledCustomInput>
    <input type='text' value={value} onChange={(e: any) => onChange(e.target.value)} className='input' placeholder='type smth' />

    <img className='img' src={searchImg} alt='searc' />
  </StyledCustomInput>
);

export default CustomInput;
