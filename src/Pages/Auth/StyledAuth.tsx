import { Tabs, TextField } from '@mui/material';
import styled from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const StyledAuth = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap');
  background: linear-gradient(84.24deg, #6148d6 15.44%, #3b25b0 75.09%), #090c10;
  height: 100vh;
  padding-left: 5rem;
  font-family: 'Roboto', sans-serif;
  position: relative;

  .main-text {
    margin-top: 0px;
    padding-top: 3.5rem;
  }

  .login-photo {
    position: absolute;
    width: 330px;
    height: 301px;
    right: 264px;
    top: 120px;
  }

  .vector-photo {
    position: absolute;
    width: 641px;
    height: 503px;
    right: 5px;
    top: 0px;
  }

  .MuiTab-root {
    color: #98a1c8;
  }
  .MuiCheckbox-root {
    color: #fff;
  }
`;

export const authTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
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
      borderBottomColor: '#fff', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#fff', // Solid underline on hover
    },
  },
})(TextField);

export default StyledAuth;
