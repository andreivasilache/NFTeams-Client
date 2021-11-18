import React from 'react';
import StyledRightMessages from './StyledRightMessages';
import { ReactComponent as ChatIcon } from '../../assets/svg/messages-icon.svg';
import chatPlaceholder1 from '../../assets/png/chat-placeholder-1.png';
import chatPlaceholder2 from '../../assets/png/chat-placeholder-2.png';

const RightMessages = () => (
  <StyledRightMessages>
    <ChatIcon />
    <span className='chat'>chat</span>
    <img className='chat-placeholder' src={chatPlaceholder1} alt='chat-placeholder' />
    <img className='chat-placeholder' src={chatPlaceholder2} alt='chat-placeholder' />
  </StyledRightMessages>
);

export default RightMessages;
