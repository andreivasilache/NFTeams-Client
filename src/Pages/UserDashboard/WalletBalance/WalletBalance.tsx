import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import CustomCardHeader from '../../../Components/CardHeader/CardHeader';
import useCoins from '../../../Hooks/useCoints';
import useStore from '../../../Hooks/useStore';
import { SmartContractsStore } from '../../../Store/SmartContracts.store';
import { WalletStore } from '../../../Store/Wallet.store';
import StyledWalletBalance from './StyledWalletBalance';

const WalletBalance = () => {
  const [balance, setBalance] = useState<any>(0);
  const { wallet } = useStore('walletStore') as WalletStore;
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;

  const [lastAchievedNFT, setLastAchievedNFT] = useState<any>(null);
  const [lastAchievedBadge, setLastAchievedAvatar] = useState<any>(null);

  const { accountCoins, loadCurrentAccountCoins } = useCoins();

  const loadBalance = async () => {
    const balanceRes = await wallet!.getBalance();
    const formattedBalance = ethers.utils.formatEther(balanceRes);
    const trimmedBalance = formattedBalance.substring(0, 8);

    setBalance(trimmedBalance);
  };

  const loadLastNFTS = () => {
    smartContractsStore.getNFTSOfWallet().then(assets => {
      const NFTS = assets.filter((asset: any) => asset.metadata.type === 'NFT');
      const badges = assets.filter((asset: any) => asset.metadata.type === 'badge');

      NFTS.sort((a: any, b: any) => b.metadata.dateAssigned - a.metadata.dateAssigned);
      badges.sort((a: any, b: any) => b.metadata.dateAssigned - a.metadata.dateAssigned);

      if (NFTS[0]) setLastAchievedNFT(NFTS[0]);
      if (badges[0]) setLastAchievedAvatar(badges[0]);
    });
  };

  useEffect(() => {
    loadBalance();
    loadCurrentAccountCoins();
    loadLastNFTS();
  }, []);

  return (
    <StyledWalletBalance>
      <CustomCardHeader title='Wallet balance' viewMoreRoute='/wallet' />
      <div className='wallet__details'>
        <div className='wallet__balance'>{accountCoins}</div>
        <div className='wallet__balance-eth'>ETH: {balance}</div>
        <div className='wallet__address'>{wallet!.address}</div>
      </div>

      <div className='wallet__newest-achievements'>
        {lastAchievedBadge && (
          <div className='newest-achievement'>
            <img className='newest-achievement__image' src={lastAchievedBadge.imageURL} />
            <div className='newest-achievement__name'>{lastAchievedBadge.metadata.name}</div>
          </div>
        )}
        {lastAchievedNFT && (
          <div className='newest-achievement'>
            <img className='newest-achievement__image' src={lastAchievedNFT.imageURL} />
            <div className='newest-achievement__name'> {lastAchievedNFT.metadata.name}</div>
          </div>
        )}
      </div>
    </StyledWalletBalance>
  );
};

export default WalletBalance;
