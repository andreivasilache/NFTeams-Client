import React from 'react';
import './Profile.css';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { useHistory } from 'react-router-dom';


export const Profile = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const history = useHistory()

  console.log(account);

  const handleClick = () => {
    history.push('/auth')
  }

  return(
    <div className='container'>
        <button type='button' onClick={handleClick}>go to auth</button>
        {account && <p>Account: {account}</p>}
        {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
    </div>
  )
}