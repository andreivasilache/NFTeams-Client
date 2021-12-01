import React, { useEffect, useState } from 'react';
import NFT from '../../../Components/NFT/NFT';
import useStore from '../../../Hooks/useStore';
import { CurrentFirebaseUserStore } from '../../../Store/CurrentFirebaseUser.store';
import { SmartContractsStore } from '../../../Store/SmartContracts.store';
import StyledNFTs from './StyledNFTs';

interface Props {
  setSelectedNft: (nft: any) => void;
  selectedNft: any;
  setImageRef: Function;
}

const NFTs = ({ setSelectedNft, selectedNft, setImageRef }: Props) => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const currentFirebaseUser = useStore('currentFirebaseUser') as CurrentFirebaseUserStore;

  const [NFTs, setNFTs] = useState([]);

  useEffect(() => {
    smartContractsStore.getNFTSOfWallet().then(assets => {
      const filteredNFTs = assets.filter((asset: any) => asset.metadata.type === 'NFT');
      setNFTs(filteredNFTs);
    });
  }, []);

  const setAsProfilePicture = async (nft: any) => {
    currentFirebaseUser.updateUserData({ profilePicture: nft });
  };

  return (
    <StyledNFTs>
      <div className='title'>Your nfts</div>
      <div className='nfts'>
        {NFTs.map((nft: any) => (
          <NFT
            key={nft?.metadata?.id}
            imgUrl={nft?.imageURL}
            name={nft?.metadata?.name}
            makeProfilePicture={() => setAsProfilePicture(nft)}
            onNFTClick={() => setSelectedNft(nft)}
            isActive={nft === selectedNft}
            setImageRef={setImageRef}
          />
        ))}
      </div>
    </StyledNFTs>
  );
};

export default NFTs;
