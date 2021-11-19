import styled from 'styled-components'

const StyledCustomButton = styled.div`
    position:relative;
    width:118px;
    cursor:pointer;
    z-index: 999;

    .custom-button{
        &__text{
            position: absolute;
            left: 0;
            top:20px;
            color:#07090C;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            text-align:center;
            width:100%;
        }
    }
`

export default StyledCustomButton