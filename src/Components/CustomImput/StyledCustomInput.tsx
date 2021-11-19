import styled from 'styled-components'

const StyledCustomInput = styled.div`
display: flex;
align-items: center;
padding: 0 16px;
max-width: calc(100% - 50px);
.input{
    background-color: transparent;
    border:none;
    text-align:right;
    color: white;
    outline: none;
    border-right: 1px solid #999999;
    padding:0 10px;
    margin:0 10px;
    width: 100%;

    &::placeholder{
        color:#999999
    }
}

`

export default StyledCustomInput