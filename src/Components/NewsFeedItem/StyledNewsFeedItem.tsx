import styled from 'styled-components'

const StyledNewsFeedItem = styled.div`
display: flex;
flex-flow: column;
margin-bottom: 30px;
    .header{
        display: flex;
        justify-content: space-between;

        &__details{
            display: flex;
        }

        &__img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
            margin-right: 15px;
        }

        &__title-content{
            display: flex;
            flex-flow: column;
        }

        &__title{
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: #E4E4E4;
        }

        &__time{
            font-weight: 600;
            font-size: 9px;
            line-height: 16px;
            color: #686868
        }

        &__tag{
            background: #6979F8;
            border-radius: 5px;
            width: 88px;
            height: 24px;
            display: flex;
            justify-content: center;
            color:#010C3F;
            font-weight:bolder
        }
    }

    .title{
        margin:12px 0;
        color: #F9F9F9;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
    }

    .content{
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        &__img{
            float:left;
            margin-right:10px;
            width: 120px;
            height: 86px;
        }
    }
`

export default StyledNewsFeedItem