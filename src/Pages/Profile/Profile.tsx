import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useAccountNFTS from '../../Hooks/useAccountNFTS';
import useStore from '../../Hooks/useStore';
import { WalletStore } from '../../Store/Wallet.store';
import StyledProfile from './StyledProfile';
import profileImg from '../../assets/png/profile.png'
import InfoListElement from './InfoList/InfoList';
import badge1 from '../../assets/png/badge1.png';
import badge2 from '../../assets/png/badge2.png';
import badge3 from '../../assets/png/badge3.png';
import badge4 from '../../assets/png/badge4.png';
import badge5 from '../../assets/png/badge5.png';
import badge6 from '../../assets/png/badge6.png';
import BadgeItem from './BadgeItem/BadgeItem';

const badges=[
  {
    imgUrl:badge1,
    title:'Badge 1'
  },
  {
    imgUrl:badge2,
    title:'Badge 2'
  },
  {
    imgUrl:badge3,
    title:'Badge 3'
  },
  {
    imgUrl:badge4,
    title:'Badge 4'
  },
  {
    imgUrl:badge5,
    title:'Badge 5'
  },
  {
    imgUrl:badge6,
    title:'Badge 6'
  }
]

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
    <StyledProfile>
      <div className='profile__image-container'>
        <img className='profile__image' src={profileImg} />
      </div>
      <div className='profile__name'>Outtadisearth</div>
      <div className='profile__detail'>
        <div>Creature of the sea and land. Alien fo sho! Rase? Vermaid.</div><br/><br/>

        <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
        <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
        <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
        <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />
        <InfoListElement detail='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' />

        <br/><br/><br/>
        <div>WALLET ID: {wallet!.address}</div>
        <div>WALLET: {balance}</div>
        <div>NFTS of wallet: {JSON.stringify(nfts)}</div>
          DETAILS
      </div>
      <div className='profile__badges'>
        {badges.map(badge => <BadgeItem key={badge.imgUrl} imgUrl={badge.imgUrl} title={badge.title} />)}
      </div>
    </StyledProfile>
  );
};
