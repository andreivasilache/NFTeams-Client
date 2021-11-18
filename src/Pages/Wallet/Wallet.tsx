import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { GridItem } from '../../Components/GridItem/GridItem';
import StyledWallet from './StyledWallet';
import WalletInfo from './WalletInfo/WalletInfo';
import TokensAndStats from './TokensAndStats/TokensAndStats';
import Badges from './Badges/Badges';
import NFTs from './NFTs/NFTs';
import WithAppLayout from '../../HOCs/WithAppLayout/WithAppLayout';

const WalletComponent = () => {
  const windowHeight = window.innerHeight;
  return (
    <WithAppLayout>
      <StyledWallet>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={10} columnSpacing={3}>
            <Grid item xs={6}>
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12}>
                  <GridItem height={150}>
                    <WalletInfo />
                  </GridItem>
                </Grid>
                <Grid item xs={12}>
                  <GridItem height={400}>
                    <TokensAndStats />
                  </GridItem>
                </Grid>
                <Grid item xs={12}>
                  <GridItem height={windowHeight - 710}>
                    <Badges />
                  </GridItem>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={12}>
                  <GridItem height={windowHeight - 120}>
                    <NFTs />
                  </GridItem>
                </Grid>
              </Grid>
              <div className='wallet-mark'>Collections</div>
            </Grid>
          </Grid>
        </Box>
      </StyledWallet>
    </WithAppLayout>
  );
};

export default WalletComponent;
