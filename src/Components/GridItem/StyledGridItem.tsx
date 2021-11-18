import styled from 'styled-components';

const StyledGrid = styled.div`
  background-color: #0d1216;
  border: 1px solid;
  border-color: ${(props: any) => props.borderColor || '#0D1216'};
  border-radius: 8px;
  height: ${(props: any) => props.height};
  overflow-y: auto;
`;
export default StyledGrid;
