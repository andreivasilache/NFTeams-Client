import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useCoins from '../../../Hooks/useCoints';
import useStore from '../../../Hooks/useStore';
import { WalletStore } from '../../../Store/Wallet.store';
import StyledWalletInfo from './StyledWalletInfo';

const WalletInfo = () => {
  const [balance, setBalance] = useState<any>(0);
  const { wallet } = useStore('walletStore') as WalletStore;

  const { accountCoins, loadCurrentAccountCoins } = useCoins();

  const loadBalance = async () => {
    const balanceRes = await wallet!.getBalance();
    const formattedBalance = ethers.utils.formatEther(balanceRes);
    const trimmedBalance = formattedBalance.substring(0, 8);

    setBalance(trimmedBalance);
  };

  useEffect(() => {
    loadBalance();
    loadCurrentAccountCoins();
  }, []);

  console.log({ accountCoins }, { balance });

  return (
    <StyledWalletInfo>
      <div className='wallet__title-container'>
        <span className='wallet__title'>Wallet</span>
        <span className='wallet__subtitle'>wallet balance</span>
      </div>
      <div className='wallet__infos'>
        <div className='wallet__value'>{accountCoins}</div>
        <div className='wallet__address'>{wallet!.address}</div>
        <div className='wallet__tip'>wallet adress</div>
      </div>
    </StyledWalletInfo>
  );
};

export default WalletInfo;
