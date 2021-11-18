import styled from 'styled-components';

const StyledLogin = styled.form`
  .login-button {
    color: #5f47d4;
    margin-top: 2rem;
    background-color: #7efacd;
  }
  .login-button:hover {
    background-color: #7efacd;
  }
`;
export const StyledPassword = styled.div`
  display: flex;
  width: 350px;
  margin-top: 1rem;
  justify-content: space-between;
  .MuiButton-text {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #fff;
  }
  .checkbox-section {
    align-self: center;
  }
  .checkbox-label {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
  }
`;
export default StyledLogin;

