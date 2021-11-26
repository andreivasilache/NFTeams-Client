import React from 'react';
import StyledNFT from './StyledNFT';
import PurpleProfile from '../../assets/svg/purple-profile.svg';

interface Props {
  imgUrl: string;
  name: string;
  makeProfilePicture: () => void;
}

const NFT = ({ imgUrl = '', name = '', makeProfilePicture }: Props) => (
  <StyledNFT>
    <div className='nft'>
      <img className='nft__image' src={imgUrl} alt='' />
      <div className='nft__set-as-profile' onClick={makeProfilePicture}>
        Make it profile pic <img src={PurpleProfile} />
      </div>
    </div>
    <span className='title'>{name}</span>
  </StyledNFT>
);

export default NFT;
