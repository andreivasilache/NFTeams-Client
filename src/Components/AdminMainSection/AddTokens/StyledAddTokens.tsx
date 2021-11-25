import styled from 'styled-components'

const StyledAddTokens = styled.div`

    .add-tokens{
        &__value-container{
            margin-top:52px;
            margin-left:25px;
        }

        &__address-container{
            margin-top:15px;
            margin-left:8px;
        }

        &__label{
            color: #7EFACD;
            font-weight: bold;
            font-size: 12px;
            line-height: 16px;
        }

        &__value-input{
            background: rgba(19, 36, 63, 0.35);
            width:150px;
            height:30px;
            border: 1px solid #7EFACD;
            box-sizing: border-box;
            border-radius: 60px;
            margin-left:10px;
            padding: 0 10px;
            color: #686868;
        }
    }
`

export default StyledAddTokens;