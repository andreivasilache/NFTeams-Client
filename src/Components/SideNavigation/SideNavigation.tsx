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
import { ROUTES } from '../../Shared/constants/Routes';

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
        onClickItem={() => onNavigateTo(ROUTES.dashboard)}
        isActive={isActive(ROUTES.dashboard)}
      />

      <NavigationItem
        NavImage={ProfileIcon}
        label='my profile'
        onClickItem={() => onNavigateTo(ROUTES.profile)}
        isActive={isActive(ROUTES.profile)}
      />

      <NavigationItem
        NavImage={MarketplaceIcon}
        label='marketplace'
        onClickItem={() => onNavigateTo(ROUTES.marketPlace)}
        isActive={isActive(ROUTES.marketPlace)}
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
        onClickItem={() => onNavigateTo(ROUTES.wallet)}
        isActive={isActive(ROUTES.wallet)}
      />

      <NavigationItem
        NavImage={QuestsIcon}
        label='quests'
        onClickItem={() => onNavigateTo(ROUTES.quests)}
        isActive={isActive(ROUTES.quests)}
      />

      <NavigationItem
        NavImage={AdminIcon}
        label='admin'
        onClickItem={() => onNavigateTo(ROUTES.adminDashboard)}
        isActive={isActive(ROUTES.adminDashboard)}
      />
    </StyledSideNavigation>
  );
};

export default SideNavigation;
