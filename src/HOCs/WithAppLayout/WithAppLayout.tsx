import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { GridItem } from '../../Components/GridItem/GridItem';
import Header from '../../Components/Header/Header';
import RightMessages from '../../Components/RightMessages/RightMessages';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';

const StyledWithAppLayout = styled.div`
  width: 100%;
  .dashboard-container {
    padding: 12px;
    height: calc(100% - 25px);
  }
`;

const WithAppLayout = ({ children, loadAccountCoinsRef }: { children: React.ReactElement; loadAccountCoinsRef?: any }) => {
  const windowHeight = window.innerHeight;
  return (
    <StyledWithAppLayout>
      <Header loadAccountCoinsRef={loadAccountCoinsRef} />
      <div className='dashboard-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={10} columnSpacing={3}>
            <Grid item xs={1}>
              <GridItem height={windowHeight - 120} color='#7EFACD'>
                <SideNavigation />
              </GridItem>
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
            <Grid item xs={1}>
              <GridItem height={windowHeight - 120} color='#6979F8'>
                <RightMessages />
              </GridItem>
            </Grid>
          </Grid>
        </Box>
      </div>
    </StyledWithAppLayout>
  );
};

export default WithAppLayout;
