
import styled from 'styled-components';

const StyledGrid = styled.div`
    background-color: #0D1216;
    border:1px solid;
    border-color:${(props:any) => props.borderColor || '#0D1216'};
    border-radius: 8px;
    height:${(props:any) => props.height};
    
`
export default StyledGrid