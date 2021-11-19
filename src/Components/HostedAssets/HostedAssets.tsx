import React, { useState } from 'react';
import StyledHostedAssets from './StyledHostedAssets';
import {ReactComponent as HostedAssetsContainer} from '../../assets/svg/hostedAssetsStructure.svg'
import AssetsComponent from './AssetsComponent/AssetsComponent';
import Users from './Users/Users';
// import HotAssetContainer from './HotAssetContainer/HotAssetContainer';

interface Props{
    items:any[]
}

const HostedAssets = ({items=[]}:Props) => {
    const [isAssetsActive, setIsAssetsActive] = useState(true)

    return (
        <StyledHostedAssets>
            <span className='title'>
                HOSTED ASSETS
            </span>
            <HostedAssetsContainer className='hosted-assets__container' />
            <div className='hosted-assets__content'>
                <div className='hosted-assets__tabs'>
                    <div className={`hosted-assets__tab ${isAssetsActive ? 'hosted-assets__tab--active' : ''}`} onClick={() => setIsAssetsActive(true)}>
                        Assets
                    </div>
                    <div className={`hosted-assets__tab ${!isAssetsActive ? 'hosted-assets__tab--active' : ''}`} onClick={() => setIsAssetsActive(false)}>
                        Badges
                    </div>
                </div>
                <div className='hosted-assets__badges-list'>
                    <AssetsComponent items={items} />
                </div>
                <div className='hosted-assets__users'>
                    <Users />
                </div>
            </div>
        </StyledHostedAssets>
    )

}

export default HostedAssets