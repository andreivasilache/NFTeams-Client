import React, { useEffect, useState } from 'react';
import NFT from '../../../Components/NFT/NFT';
import useStore from '../../../Hooks/useStore';
import { SmartContractsStore } from '../../../Store/SmartContracts.store';
import StyledNFTs from './StyledNFTs';

const NFTs = () => {
  const smartContractsStore = useStore('smartContracts') as SmartContractsStore;
  const [NFTs, setNFTs] = useState([]);

  useEffect(() => {
    smartContractsStore.getNFTSOfWallet().then(assets => {
      const filteredNFTs = assets.filter((asset: any) => asset.metadata.type === 'NFT');
      setNFTs(filteredNFTs);
    });
  }, []);

  return (
    <StyledNFTs>
      <div className='title'>Your nfts</div>
      <div className='nfts'>
        {NFTs.map((nft: any) => (
          <NFT key={nft?.metadata?.id} imgUrl={nft?.imageURL} name={nft?.metadata?.title} />
        ))}
      </div>
    </StyledNFTs>
  );
};

export default NFTs;
