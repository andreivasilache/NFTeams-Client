import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import StyledHeader from './StyledHeader';
import logo from '../../assets/png/logo.png';
import profile from '../../assets/png/profile-logo.png';
import { ReactComponent as MoneyIcon } from '../../assets/svg/finance.svg';
import { ReactComponent as BellIcon } from '../../assets/svg/bell.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/search-icon.svg';
import useCoins from '../../Hooks/useCoints';

const useStyle = makeStyles({
  barColorPrimary: {
    backgroundColor: '#7EFACD !important',
  },
  colorPrimary: {
    backgroundColor: '#7863E0 !important',
  },
});

const Header = () => {
  const classes = useStyle();
  const [searchValue, setSearchValue] = useState();
  console.warn(searchValue, setSearchValue);

  const { accountCoins, loadCurrentAccountCoins } = useCoins();

  useEffect(() => {
    loadCurrentAccountCoins();
  }, []);

  return (
    <StyledHeader>
      <div className='left-panel'>
        <img className='left-panel__logo' src={logo} alt='logo' />
        <div className='left-panel__info'>
          <span className='left-panel__text'>percent xxx</span>
          <Box sx={{ width: '150px' }}>
            <LinearProgress
              variant='determinate'
              color='primary'
              value={20}
              classes={{ barColorPrimary: classes.barColorPrimary, colorPrimary: classes.colorPrimary }}
            />
          </Box>
          <div className='left-panel__finance'>
            <MoneyIcon />
            <span className='left-panel__finance-value'>{accountCoins}</span>
          </div>
        </div>
      </div>
      <div className='right-panel'>
        <div className='right-panel__search'>
          <span>Search dat thing</span>
          <SearchIcon />
        </div>
        <BellIcon />
        <span className='right-panel__welcome'>Hi again, bui!</span>
        <img src={profile} alt='profile logo' />
      </div>
    </StyledHeader>
  );
};

export default Header;
