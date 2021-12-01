import React from 'react';
import StyledNFT from './StyledNFT';
import PurpleProfile from '../../assets/svg/purple-profile.svg';

interface Props {
  imgUrl: string;
  name: string;
  isActive: boolean;
  setImageRef: Function;
  makeProfilePicture: () => void;
  onNFTClick: () => void;
}

const NFT = ({ imgUrl = '', name = '', isActive, setImageRef, makeProfilePicture, onNFTClick }: Props) => (
  <StyledNFT>
    <div className='nft'>
      <img
        onClick={onNFTClick}
        className={`nft__image ${isActive ? 'nft__image--active' : ''}`}
        src={imgUrl}
        alt=''
        ref={isActive ? newRef => setImageRef(newRef) : null}
      />
      <div className='nft__set-as-profile' onClick={makeProfilePicture}>
        Make it profile pic <img src={PurpleProfile} />
      </div>
    </div>
    <span className='title'>{name}</span>
  </StyledNFT>
);

export default NFT;
