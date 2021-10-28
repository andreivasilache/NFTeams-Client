import React from 'react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import './Auth.css'

export const Auth = () => {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    
    return(
        <div className='auth-container'>
            <div className='auth-container__title'>Welcome to NFTeams</div>
            <div className='auth-container__subtitle'>Please connect to metamask</div>
            <div>
                <button className='auth-container__connect' type='button' onClick={() => activateBrowserWallet()}>Connect</button>
            </div>
            {account && <p>Account: {account}</p>}
            {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
        </div>
    )
}