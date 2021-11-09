import styled from 'styled-components'

const StyledHello = styled.div`
    display: flex;
    padding:15px;
    align-items: center;

    .img{
        border-radius: 8px;
        margin-right:15px;
    }

    .message{
        text-transform: uppercase;
        &__title{
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
            color:#fff
        }

        &__date{
            font-weight: bold;
            font-size: 9px;
            line-height: 16px;
            color: #364659;
            margin-top: -3px;
        }
    }
`

export default StyledHello