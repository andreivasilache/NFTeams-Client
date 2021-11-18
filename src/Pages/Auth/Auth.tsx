import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Tab } from '@mui/material';
import { useHistory } from 'react-router';
import { getAuth } from '@firebase/auth';

import StyledAuth, { authTheme, StyledTabs } from './StyledAuth';
import { Login } from '../../Components/Login/Login';
import loginPh from '../../assets/png/login-photo.png';
import vectorPh from '../../assets/png/vector-photo.png';
import { Register } from '../../Components/Register/Register';
import { ROUTES } from '../../Shared/constants/Routes';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Typography>{children}</Typography>}
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

  const history = useHistory();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAuth().onAuthStateChanged(user => {
      if (user) {
        history.push(ROUTES.dashboard);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={authTheme}>
      <StyledAuth>
        <h1 className='main-text'>Welcome Back</h1>
        <p className = 'sub-text'>Please log in to your account</p>
          <StyledTabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab style={{minWidth:"41px"}} label='Login' {...a11yProps(0)} />
            <Tab style={{minWidth:"57px"}} label='Register' {...a11yProps(1)} />
          </StyledTabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
        <img className='login-photo' src={loginPh} />
        <img className='vector-photo' src={vectorPh} />
      </StyledAuth>
    </ThemeProvider>
  );
};
