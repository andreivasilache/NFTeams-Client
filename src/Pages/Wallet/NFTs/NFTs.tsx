import React from 'react'
import NFT from '../../../Components/NFT/NFT'
import { mockNfts } from '../../../__mocks__/nfts'
import StyledNFTs from './StyledNFTs'

const NFTs = () => (
    <StyledNFTs>
        <div className='title'>Your nfts</div>
        <div className='nfts'>
            {mockNfts.map(nft => <NFT key={nft.imgUrl} imgUrl={nft.imgUrl} name={nft.title} />)}
        </div>
    </StyledNFTs>
)

export default NFTs