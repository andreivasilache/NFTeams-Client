import styled from 'styled-components';

const StyledWalletInfo = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: flex;
  align-items: center;
  padding: 10px;

  .wallet {
    &__title-container {
      width: 60%;
      display: flex;
      flex-flow: column;
    }
    &__title {
      font-weight: bold;
      font-size: 88px;
      line-height: 64px;
    }

    &__subtitle {
      text-transform: uppercase;
      color: #d0cfcf;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      margin-left: 16px;
    }

    &__value {
      font-weight: bold;
      font-size: 44px;
      line-height: 64px;
      color: #7efacd;
    }

    &__address {
      color: #e4e4e4;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
    }

    &__tip {
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      color: #929bc9;
    }
  }
`;

export default StyledWalletInfo;
