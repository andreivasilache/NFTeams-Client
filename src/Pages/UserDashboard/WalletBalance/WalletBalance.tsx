import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import useCoins from '../../../Hooks/useCoints';
import useStore from '../../../Hooks/useStore';
import { WalletStore } from '../../../Store/Wallet.store';
import StyledWalletBalance from './StyledWalletBalance';

const WalletBalance = () => {
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

  return (
    <StyledWalletBalance>
      {/* <div className='wallet__header'>
        <div className='wallet__title'>WALLET BALANCE</div>
        <div className='wallet__view-more'> View more</div>
      </div> */}

      <CustomCardHeader title='Wallet balance' viewMoreClick={()=> {}} />
      <div className='wallet__details'>
        <div className='wallet__balance'>{accountCoins}</div>
        <div className='wallet__balance-eth'>ETH: {balance}</div>
        <div className='wallet__address'>{wallet!.address}</div>
      </div>
    </StyledWalletBalance>
  );
};

export default WalletBalance;
