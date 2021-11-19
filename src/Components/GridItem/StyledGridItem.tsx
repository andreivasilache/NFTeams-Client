import styled from 'styled-components';

const StyledGrid = styled.div`
  background-color: ${(props: any) => (props.hasBackground ? '#0d1216' : 'transparent')};
  border: 1px solid;
  border-color: ${(props: any) => props.borderColor || 'transparent'};
  border-radius: 8px;
  height: ${(props: any) => props.height};
  overflow-y: auto;
`;
export default StyledGrid;
