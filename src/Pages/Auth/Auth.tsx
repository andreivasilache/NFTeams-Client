import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Tab } from '@mui/material';
import StyledAuth, { authTheme, StyledTabs } from './StyledAuth';
import { Login } from '../../Components/Login/Login';
import loginPh from '../../assets/png/login-photo.png';
import vectorPh from '../../assets/png/vector-photo.png';
import { Register } from '../../Components/Register/Register';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Auth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={authTheme}>
      <StyledAuth>
        <h1 className='main-text'>Welcome Back</h1>
        <p>Please log in to your account</p>
          <StyledTabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Login' {...a11yProps(0)} />
            <Tab label='Register' {...a11yProps(1)} />
          </StyledTabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
        <img className='login-photo' src={loginPh}/>
        <img className='vector-photo' src={vectorPh}/>
      </StyledAuth>
      </ThemeProvider>
  );
};
