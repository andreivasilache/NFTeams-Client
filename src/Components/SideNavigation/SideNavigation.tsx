import React from 'react';
import { useHistory, useLocation } from 'react-router';
import StyledSideNavigation from './StyledSideNavigation';
import NavigationItem from './NavigationItem/NavigationItem';
import ProfileIcon from './NavIcons/Profile/ProfileIcon';
import MarketplaceIcon from './NavIcons/Marketplace/MarketplaceIcon';
import CommunitiesIcon from './NavIcons/Comunities/CommunitiesIcon';
import WalletIcon from './NavIcons/Wallet/Walleticon';
import HomeIcon from './NavIcons/HomeIcon/HomeIcon';
import QuestsIcon from './NavIcons/Quests/Quests';
import AdminIcon from './NavIcons/AdminIcon/AdminIcon';

const SideNavigation = () => {
  const history = useHistory();
  const location = useLocation();
  const onNavigateTo = (route: string) => {
    history.push(route);
  };

  const isActive = (key: string) => location.pathname === key;

  return (
    <StyledSideNavigation>
      <NavigationItem
        NavImage={HomeIcon}
        label='home'
        onClickItem={() => onNavigateTo('/user-dashboard')}
        isActive={isActive('/user-dashboard')}
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
        label='collections'
        onClickItem={() => onNavigateTo('/wallet')}
        isActive={isActive('/wallet')}
      />

      <NavigationItem NavImage={QuestsIcon} label='quests' onClickItem={() => onNavigateTo('/quests')} isActive={isActive('/quests')} />

      <NavigationItem
        NavImage={AdminIcon}
        label='admin'
        onClickItem={() => onNavigateTo('/admin-dashboard')}
        isActive={isActive('/admin-dashboard')}
      />
    </StyledSideNavigation>
  );
};

export default SideNavigation;
