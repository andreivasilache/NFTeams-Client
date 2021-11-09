import styled from 'styled-components'

const StyledNFTs = styled.div`
    padding:10px;
    height: 100%;
    .title{
        color: #D0CFCF;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        text-transform: uppercase;
    }

    .nfts{
        padding-top: 30px;
        margin-top:25px;
        display: flex;
        flex-wrap: wrap;
        height: calc(100% - 100px);
        overflow: auto;
    }
`

export default StyledNFTs