import styled from 'styled-components';

const StyledWalletBalance = styled.div`
  margin: 0px 32px;
  margin-top: 24px;

  .wallet {
    &__details {
      margin-top: 65px;
      text-align: center;
      font-weight: 400;
    }

    &__balance {
      color: #7efacd;
      font-size: 44px;
      font-weight: 700;
    }

    &__balance-eth {
      color: #e4e4e4;
      font-size: 12px;
      margin-top: 4px;
    }

    &__address {
      font-size: 12px;
      color: #929bc9;
      margin-top: 2px;
    }
    &__newest-achievements {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
  }

  .newest-achievement {
    &__image {
      width: 161px;
      height: 205px;
    }
    &__name {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;

      color: #e4e4e4;
    }
  }
`;

export default StyledWalletBalance;
