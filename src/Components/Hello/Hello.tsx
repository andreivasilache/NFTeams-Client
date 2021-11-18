import React from 'react';
import dayjs from 'dayjs';
import StyledHello from './StyledHello';
import helloImg from '../../assets/png/hello.png';

const Hello = () => {
  const getMessage = () => {
    const date = new Date();
    const hours = dayjs(date).hour();
    console.log(hours);

    if (hours < 12) {
      return 'Good Morning';
    }

    if (hours < 18) {
      return 'Good Afternoon';
    }

    return 'Good Evening';
  };
  return (
    <StyledHello>
      <img src={helloImg} alt='hello' className='img' />
      <div className='message'>
        <div className='message message__title'>
          <span>{getMessage()},</span>
          <span>BUI</span>
        </div>
        <div className='message message__date'>{dayjs(new Date()).format('dddd, DD MMM YYYY')}</div>
      </div>
    </StyledHello>
  );
};

export default Hello;
