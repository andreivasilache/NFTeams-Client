import styled from 'styled-components';

const StyledSideNavigation = styled.div`
  padding: 20px 0;
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  width: 135px;
  z-index: 9999999;
`;

export default StyledSideNavigation;
