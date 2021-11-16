import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useAccountNFTS from '../../Hooks/useAccountNFTS';
import useStore from '../../Hooks/useStore';
import { WalletStore } from '../../Store/Wallet.store';
import StyledProfile from './StyledProfile';
import profileImg from '../../assets/png/profile.png';
import InfoListElement from './InfoList/InfoList';

import BadgeItem from '../../Components/BadgeItem/BadgeItem';
import { badges } from '../../__mocks__/badges';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';

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
    <WithAppLayout>
      <StyledProfile>
        <div className='profile__image-container'>
          <img className='profile__image' src={profileImg} />
        </div>
        <div className='profile__name'>Outtadisearth</div>
        <div className='profile__detail'>
          <div>Creature of the sea and land. Alien fo sho! Rase? Vermaid.</div>
          <br />
          <br />
          <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
          <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
          <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
          <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
          <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
          <br />
          <br />
          <br />
          <div>WALLET ID: {wallet!.address}</div>
          <div>WALLET: {balance}</div>
          <div>NFTS of wallet: {JSON.stringify(nfts)}</div>
          DETAILS
        </div>
        <div className='profile__badges'>
          {badges.map(badge => (
            <BadgeItem key={badge.imgUrl} imgUrl={badge.imgUrl} title={badge.title} />
          ))}
        </div>
      </StyledProfile>
    </WithAppLayout>
  );
};
