import styled from 'styled-components';

const StyledWithModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-container {
    background-image: ${(props: any) => `url(${props.image})`};
    &--info {
      position: absolute;
      top: ${(props: any) => `${props.top + 70}px`};
      left: ${(props: any) => `${props.left - 190}px`};
      width: 477px;
      height: 560px;
    }
    &--actions {
      width: 665px;
      height: 728px;
    }
  }
`;

export default StyledWithModal;
