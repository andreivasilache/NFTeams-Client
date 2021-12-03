import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridItem } from '../../Components/GridItem/GridItem';
import StyledUserDashboard from './StyledUserDashboard';
import WalletBalance from './WalletBalance/WalletBalance';
import Hello from '../../Components/Hello/Hello';
import ProfilePreview from './ProfilePreviw/ProfilePreview';
import LeaderBoardsPreview from './LeaderBoards/LeaderBoards';
import NewsPreview from './News/News';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';

const UserDashboard = () => {
  const windowHeight = window.innerHeight;
  return (
    <WithAppLayout>
      <StyledUserDashboard>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={10} columnSpacing={3}>
            <Grid item xs={4}>
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12}>
                  <GridItem height={100} color='#7EFACD' overflowY={false}>
                    <Hello />
                  </GridItem>
                </Grid>
                <Grid item xs={12}>
                  <GridItem height={windowHeight - 240} color='#7EFACD'>
                    <ProfilePreview />
                  </GridItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12}>
                  <GridItem height={(windowHeight - 120) * 0.6 - 20} color='#7EFACD'>
                    <WalletBalance />
                  </GridItem>
                </Grid>
                <Grid item xs={12}>
                  <GridItem height={(windowHeight - 120) * 0.4} color='#6979F8'>
                    <LeaderBoardsPreview />
                  </GridItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <GridItem height={windowHeight - 120} color='#6979F8'>
                <NewsPreview />
              </GridItem>
            </Grid>
          </Grid>
        </Box>
      </StyledUserDashboard>
    </WithAppLayout>
  );
};

export default UserDashboard;
