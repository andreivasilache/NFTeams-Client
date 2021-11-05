import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../../Components/Header/Header';
import StyledDashboard from './StyledDashboard';
import { GridItem } from '../../Components/GridItem/GridItem';


const Dashboard = () => {
    const windowHeight = window.innerHeight
    return(
        <StyledDashboard>
            <Header />
            <div className="dashboard-container">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container rowSpacing={10} columnSpacing={3}>
                        <Grid item xs={1}>
                            <GridItem height={windowHeight - 120} color='#7EFACD'>
                                <span>test 1</span>
                            </GridItem>
                        </Grid>
                        <Grid item xs={4} >
                            <Grid container rowSpacing={2} columnSpacing={3}>
                                <Grid item xs={12} >
                                    <GridItem height={100} color='#7EFACD'>
                                        <span>test 2</span>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={12} >
                                    <GridItem height={windowHeight - 240} color='#7EFACD'>
                                        <span>test 2</span>
                                    </GridItem>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                        <Grid container rowSpacing={2} columnSpacing={3}>
                                <Grid item xs={12} >
                                    <GridItem height={(windowHeight - 120)*0.6 - 20} color='#7EFACD'>
                                        <span>test 2</span>
                                    </GridItem>
                                </Grid>
                                <Grid item xs={12} >
                                    <GridItem height={(windowHeight - 120)*0.4} color='#6979F8'>
                                        <span>test 2</span>
                                    </GridItem>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <GridItem height={windowHeight - 120} color='#6979F8'> 
                                <span>test 4</span>
                            </GridItem>
                        </Grid>
                        <Grid item xs={1}>
                            <GridItem height={windowHeight - 120} color='#6979F8' >
                                <span>test 5</span>
                            </GridItem>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard