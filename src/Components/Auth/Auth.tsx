import React, { useState } from 'react';
// import { useEtherBalance, useEthers } from '@usedapp/core';
// import { formatEther } from '@ethersproject/units';
import './Auth.css';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (err: any) {
      alert(err.code);
      console.log(err);
    }
  };

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (err: any) {
      alert(err.code);
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <input value={password} onChange={e => setPassword(e.target.value)} />
        <button type='button' onClick={() => registerWithEmailAndPassword(email, password)}>
          register
        </button>
      </div>

      <div>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <input value={password} onChange={e => setPassword(e.target.value)} />
        <button type='button' onClick={() => loginWithEmailAndPassword(email, password)}>
          login
        </button>
      </div>
    </>
  );
  // const { activateBrowserWallet, account } = useEthers();
  // const etherBalance = useEtherBalance(account);
  // return (
  //   <div className='auth-container'>
  //     <div className='auth-container__title'>Welcome to NFTeams</div>
  //     <div className='auth-container__subtitle'>Please connect to metamask</div>
  //     <div>
  //       <button className='auth-container__connect' type='button' onClick={() => activateBrowserWallet()}>
  //         Connect
  //       </button>
  //     </div>
  //     {account && <p>Account: {account}</p>}
  //     {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
  //   </div>
  // );
};
