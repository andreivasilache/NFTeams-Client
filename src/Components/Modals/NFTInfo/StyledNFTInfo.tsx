import styled from 'styled-components';

const StyledNFTInfo = styled.div`
  .modal {
    &__title {
      color: #7efacd;
      text-transform: uppercase;
      margin-top: 40px;
      margin-left: 30px;
      width: 230px;
      text-align: center;
    }

    &__container {
      margin-left: 30px;
      margin-top: 70px;
      width: calc(100% - 70px);
    }

    &__received-info {
      width: 100%;
      text-align: center;
      padding-top: 60px;
      color: #7efacd;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
    }

    &__content {
      margin-top: 30px;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    &__content-item {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 130px;
      flex-flow: column;
      margin-top: 3px;
    }

    &__content-item-info {
      color: #929bc9;
    }

    &__cross {
      position: absolute;
      bottom: 80px;
      left: 140px;
    }
  }
`;

export default StyledNFTInfo;
