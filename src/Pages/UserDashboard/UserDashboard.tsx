import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridItem } from '../../Components/GridItem/GridItem';
import StyledUserDashboard from './StyledUserDashboard'
import WalletBalance from './WalletBalance/WalletBalance';
import Hello from '../../Components/Hello/Hello';

const UserDashboard = () => {
    const windowHeight = window.innerHeight;
    return(
        <StyledUserDashboard>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={10} columnSpacing={3}>
            <Grid item xs={4}>
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12}>
                  <GridItem height={100} color='#7EFACD'>
                    <Hello />
                  </GridItem>
                </Grid>
                <Grid item xs={12}>
                  <GridItem height={windowHeight - 240} color='#7EFACD'>
                    <span>test 2</span>
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
                    <span>test 2</span>
                  </GridItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <GridItem height={windowHeight - 120} color='#6979F8'>
                <span>test 4</span>
              </GridItem>
            </Grid>
          </Grid>
        </Box>
        </StyledUserDashboard>
    )
}

export default UserDashboard