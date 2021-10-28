import React from 'react';
import { getAuth } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Profile.css';
// import { useEtherBalance, useEthers } from '@usedapp/core';
// import { formatEther } from '@ethersproject/units';

export const Profile = () => {
  const [user] = useAuthState(getAuth());

  // const { account } = useEthers();
  // const etherBalance = useEtherBalance(account);
  // const history = useHistory()

  return (
    <div className='container'>
      <div>Hello {user.email}</div>
      {/* <button type='button' onClick={handleClick}>go to auth</button> */}
      {/* {account && <p>Account: {account}</p>}
        {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>} */}
    </div>
  );
};
