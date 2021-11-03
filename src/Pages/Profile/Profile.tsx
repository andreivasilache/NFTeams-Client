import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './Profile.css';
import useAccountNFTS from '../../Hooks/useAccountNFTS';
import useStore from '../../Hooks/useStore';
import { WalletStore } from '../../Store/Wallet.store';

export const Profile = () => {
  const [balance, setBalance] = useState<any>(0);
  const { wallet } = useStore('walletStore') as WalletStore;
  const nfts = useAccountNFTS(wallet!.address);

  const loadBalance = async () => {
    const balanceRes = await wallet!.getBalance();
    const formattedBalance = ethers.utils.formatEther(balanceRes);

    setBalance(formattedBalance);
  };

  useEffect(() => {
    loadBalance();
  }, []);

  return (
    <div>
      <div>WALLET ID: {wallet!.address}</div>
      <div>WALLET: {balance}</div>
      <div>NFTS of wallet: {JSON.stringify(nfts)}</div>
    </div>
  );
};
