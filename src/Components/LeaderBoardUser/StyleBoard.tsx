import styled from 'styled-components';

const StyledBoard = styled.div`
    display: flex;
    margin-bottom: 24px;
`;
export const LeaderImage = styled.img`
    width: 49px;
    height: 49px;
    border-radius: 71px;
`
export const LeaderInfo = styled.div`
    width: 400px;
    height: 49px;
    margin-left: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    .skilsText{
        font-size: 9px;
        letter-spacing: 0.12em;
        text-transform: uppercase;

        color: #586E89;
    }
`

export default StyledBoard;