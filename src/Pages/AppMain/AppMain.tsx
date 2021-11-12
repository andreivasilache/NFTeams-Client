import React from 'react';
import { useLocation } from 'react-router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../../Components/Header/Header';
import { GridItem } from '../../Components/GridItem/GridItem';
// import WalletBalance from './WalletBalance/WalletBalance';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import RightMessages from '../../Components/RightMessages/RightMessages';
import UserDashboard from '../UserDashboard/UserDashboard';
import StyledAppMain from './StyledAppMain';
import { Profile } from '../Profile/Profile';
import Wallet from '../Wallet/Wallet';

const AppMain = () => {
  const windowHeight = window.innerHeight;
  const location = useLocation();
  const isUserDashboard = location.pathname === '/dashboard';
  const isProfileSelected = location.pathname === '/profile';
  const isWalletSelected = location.pathname === '/wallet';


  return (
    <StyledAppMain>
      <Header />
      <div className='dashboard-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={10} columnSpacing={3}>
            <Grid item xs={1}>
              <GridItem height={windowHeight - 120} color='#7EFACD'>
                <SideNavigation />
              </GridItem>
            </Grid>
            <Grid item xs={10}>
              <div style={{height: windowHeight - 120}}>
                {isUserDashboard && <UserDashboard />}
                {isProfileSelected && <Profile />}
                {isWalletSelected && <Wallet />}
              </div>
            </Grid>
            <Grid item xs={1}>
              <GridItem height={windowHeight - 120} color='#6979F8'>
                <RightMessages />
              </GridItem>
            </Grid>
          </Grid>
        </Box>
      </div>
    </StyledAppMain>
  );
};

export default AppMain;
