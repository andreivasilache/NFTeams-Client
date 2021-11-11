import React from 'react'
import { useHistory, useLocation } from 'react-router';
import StyledSideNavigation from './StyledSideNavigation';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileIcon from './NavIcons/Profile/ProfileIcon';
import MarketplaceIcon from './NavIcons/Marketplace/MarketplaceIcon';
import CommunitiesIcon from './NavIcons/Comunities/CommunitiesIcon';
import WalletIcon from './NavIcons/Wallet/Walleticon';
import HomeIcon from './NavIcons/HomeIcon/HomeIcon';

const SideNavigation = () => {
    const history = useHistory()
    const location = useLocation()
    const onNavigateTo = (route:string) => {
        history.push(route);
    }

    const isActive = (key:string) => location.pathname === key

    return(
        <StyledSideNavigation>
            <NavigationItem
                NavImage={HomeIcon}
                label='home'
                onClickItem={() => onNavigateTo('/dashboard')}
                isActive={isActive('/dashboard')}
            />

            <NavigationItem
                NavImage={ProfileIcon}
                label='my profile'
                onClickItem={() => onNavigateTo('/profile')}
                isActive={isActive('/profile')}
            />

            <NavigationItem
                NavImage={MarketplaceIcon}
                label='marketplace'
                onClickItem={() => onNavigateTo('/marketplace')}
                isActive={isActive('/marketplace')}
            />

            <NavigationItem
                NavImage={CommunitiesIcon}
                label='communities'
                onClickItem={() => onNavigateTo('/communities')}
                isActive={isActive('/communities')}
            />

            <NavigationItem
                NavImage={WalletIcon}
                label='wallet'
                onClickItem={() => onNavigateTo('/wallet')}
                isActive={isActive('/wallet')}
            />
        </StyledSideNavigation>
    )

}

export default SideNavigation