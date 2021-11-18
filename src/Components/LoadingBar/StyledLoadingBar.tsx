import styled from 'styled-components'

const StyledLoadingBar = styled.div`
    width: 513px;
    height: 21px;
    border-radius: 14px;
    background-color: rgba(120, 99, 224, 0.3);
`
export const StyledLoadedBar = styled.div`
    position: relative;
    width: ${props => props.id };
    height: 21px;
    border-radius: 14px;
    background: #7EFACD;
`
export const ProcentLoaded = styled.div`
    position: absolute;
    top: 3px;
    right: 10px;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #07090C;
`

export default StyledLoadingBar;