import React from 'react'
import StyledNFT from './StyledNFT'

interface Props {
    imgUrl:string;
    name:string;
}

const NFT = ({imgUrl='', name=''}:Props) => (
    <StyledNFT>
        <div className='nft'>
            <img className='nft__image' src={imgUrl} alt='' />
        </div>
        <span className='title'>{name}</span>
    </StyledNFT>
)

export default NFT