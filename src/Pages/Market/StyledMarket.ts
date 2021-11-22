import styled from 'styled-components';

export const StyledMarket = styled.div`
  .market {
    margin-top: 29px;
    display: flex;
    &__filters {
      width: 285px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 58px;
    }
    &__filter {
      font-size: 14px;
      color: #686868;
      cursor: pointer;
      line-height: 24px;
      &--active {
        color: #7efacd;
        border-bottom: 1px solid #7efacd;
      }
    }

    &__items {
      margin-right: 58px;
      width: 750px;
      height: 733px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      overflow-y: auto;
    }
  }

  .item {
    width: 205px;
    height: 327px;
    position: relative;
    margin-bottom: 77px;
    &__image {
      width: 205px;
      height: 205px;
      border: 1px solid #7efacd;
      box-sizing: border-box;
      border-radius: 8px;
    }
    &__coins {
      position: absolute;
      top: 19px;
      right: 45px;
    }
    &__coins-support {
      position: absolute;
      top: 17px;
      right: 0;
    }

    &__redeem {
      position: absolute;
      left: 55px;
      top: 206px;
      cursor: pointer;
    }

    &__title {
      font-size: 14px;
      line-height: 16px;
      color: #e4e4e4;
      letter-spacing: 0.5px;
      padding: 0px 15px;
      margin-top: 8px;
    }
  }

  .form {
    &__label {
      position: absolute;
      color: #6979f8;
      font-size: 88px;
      line-height: 64px;
      font-weight: bold;
      top: -50px;
      left: -15px;
    }
  }
`;
