import styled from 'styled-components';

const StyledCustomSquareButton = styled.button`
  width: ${(props:any) => (props.customWidth || '82px')};
  height: 26px;
  background-color: #dd56ff;
  position: relative;
  cursor: pointer;

  .corner-top {
    position: absolute;
    top: -7px;
    left: -7px;
  }

  .corner-bottom{
    position: absolute;
    bottom: -5px;
    right: -2px;
  }

`;

export default StyledCustomSquareButton;
