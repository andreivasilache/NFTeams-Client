import styled from 'styled-components'

const StyledCustomSquareButton = styled.button`
    width: 82px;
    height: 26px;
    background-color: #DD56FF;
    position:relative;
    cursor: pointer;

    .corners{
        position:absolute;
        top:-7px;
        left:-7px
    }
`

export default StyledCustomSquareButton