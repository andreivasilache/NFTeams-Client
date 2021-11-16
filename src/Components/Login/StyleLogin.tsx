import styled from 'styled-components'

const StyledLogin = styled.form`
  @import url(//db.onlinewebfonts.com/c/0b51833ff62e4af8acb5fd3e2bf59e97?family=SF+Pro+Display);
  `
export const StyledPassword = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;

    .checkbox-section{
        align-self: center;
    }
    .MuiFormControlLabel-label,
    .MuiButton-text{
        text-transform: capitalize;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #fff;
    }
`
export default StyledLogin