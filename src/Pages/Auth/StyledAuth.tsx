import { Tabs, TextField } from '@mui/material';
import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

/*
const PXtoVW = (px:number) =>{
  return 100 * (px/1920)
}
const PXtoVH = (px:number) =>{
  return 100 * (px/1080)
}
*/

const StyledAuth = styled.div`
  overflow: hidden;
  background: linear-gradient(84.24deg, #6148d6 15.44%, #3b25b0 75.09%), #090c10;
  height: 100vh;
  padding-left: 14.53125vw;
  position: relative;
  font-family: 'SF Pro Display';

  .main-text,
  .sub-text {
    margin: 0;
    font-style: normal;
    font-weight: normal;
  }

  .main-text {
    padding-top: 26.39vh;
    font-size: 32px;
    line-height: 48px;
  }
  .sub-text {
    margin-bottom: 8.3vh;
    font-size: 20px;
    line-height: 40px;
  }

  .login-photo {
    position: absolute;
    width: 34.32vw;
    height: 55.83vh;
    right: 23.43vw;
    top: 18.24vh;
  }

  .vector-photo {
    position: absolute;
    width: 61.77vw;
    height: 85.92vh;
    right: 0px;
    top: 0px;
  }

  .MuiTab-root {
    color: #98a1c8;
    padding: 0px;
    margin-right: 21px;
    text-transform: capitalize;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
  }
  .MuiTabs-root {
    width: 300px;
  }
  .MuiCheckbox-root {
    color: #fff;
  }
  .login-button,
  .register-button {
    background-color: #7efacd;
    margin-top: 8.7vh;
    padding: 12px 32px;
    width: 132px;
    height: 40px;
    color: #5f47d4;
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    border-radius: 8px;
  }
  .login-button:hover,
  .register-button:hover {
    background-color: #7efacd;
  }
  @media (max-width: 1060px) {
    .vector-photo {
      display: none;
    }
    .login-photo {
      display: none;
    }
  }
`;

export const authTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['SF Pro Display'].join(','),
  },
});

export const StyledTabs = styled(Tabs)`
  margin-bottom: 1rem;
`;

export const AuthFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const WhiteTextField = withStyles({
  root: {
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fff',
    },
  },
})(TextField);

export default StyledAuth;
