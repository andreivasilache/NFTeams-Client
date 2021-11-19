import React from 'react';
import StyledCustomInput from './StyledCustomInput';
import searchImg from '../../assets/svg/search.svg';

const CustomInput = () => (
  <StyledCustomInput>
    <input type='text' className='input' placeholder='type smth' />

    <img className='img' src={searchImg} alt='searc' />
  </StyledCustomInput>
);

export default CustomInput;
