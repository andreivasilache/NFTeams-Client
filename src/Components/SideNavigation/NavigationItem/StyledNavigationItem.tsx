import styled from 'styled-components';

const StyledNavigationItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;

  .nav-item-active{
    filter: drop-shadow(0px 2px 4px #00FFD1);
  }

  .navigation-label {
    color: ${(props: any) => props.color};
    text-transform: uppercase;
    font-size: 9px;
    line-height: 16px;
    font-weight: 500;
  }
`;

export default StyledNavigationItem;
