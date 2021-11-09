import styled from 'styled-components'

const StyledRightMessages = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;

    .chat{
        text-transform: uppercase;
        font-size: 9px;
        line-height: 16px;
        color: #6979F8;
        margin-bottom: 40px;
    }

    .chat-placeholder{
        margin: 20px 0;
        width:48px;
        height: 48px;
    }
`

export default StyledRightMessages