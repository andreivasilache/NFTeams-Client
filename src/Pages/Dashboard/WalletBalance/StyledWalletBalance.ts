import styled from 'styled-components';

const StyledWalletBalance = styled.div`
  margin: 0px 32px;
  margin-top: 24px;

  .wallet {
    &__header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }

    &__title {
      font-weight: 700;
      color: var(--theming-font-color);
      letter-spacing: 0.0075em;
    }

    &__view-more {
      font-weight: 600;
      color: var(--theming-font-color-secondary);
      letter-spacing: 0.5px;
    }
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
  }
`;

export default StyledWalletBalance;