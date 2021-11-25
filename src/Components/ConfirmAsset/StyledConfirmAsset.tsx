import styled from 'styled-components';

const StyledConfirmAsset = styled.div`
  width: 480px;
  height: 560px;
  .confirm-asset {
    &__image {
      position: absolute;
      left: 45px;
      top: 131px;
      width: 385px;
      height: 389px;
    }

    &__name {
      position: absolute;
      top: 27px;
      left: 26px;
      color: #7efacd;
      font-weight: normal;
      font-size: 32px;
      line-height: 48px;
      width: 235px;
      text-align: center;
    }
  }
`;

export default StyledConfirmAsset;
