import styled from 'styled-components';

const StyledAdminMainSection = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .center-background {
    position: absolute;
    top: 120px;
    width: 91%;
    left: 3%;
  }

  .left-background {
    position: absolute;
    left: 100px;
    z-index: 2;
    height: 450px;
  }

  .right-background {
    position: absolute;
    right: 110px;
    height: 450px;
    z-index: 5;
  }

  .admin-main {
    &__title {
      z-index: 9999;
      position: absolute;
      left: 44%;
      top: 42%;
      color: #dd56ff;
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
    }

    &__tokens {
      z-index: 9999;
      position: absolute;
      left: 17%;
      top: calc(41% + 10px);
      color: #dd56ff;
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
    }

    &__add-tokens {
      position: absolute;
      z-index: 999;
      width: 230px;
      height: 390px;
      top: 50%;
      left: 155px;
    }

    &__analytics {
      z-index: 9999;
      position: absolute;
      left: 75%;
      top: calc(41% + 10px);
      color: #dd56ff;
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
    }
    &__add-tokens-actions {
      margin-top: 58px;
      margin-left: 110px;
    }

    &__people-won {
      z-index: 222;
      position: absolute;
      right: 10.5%;
      top: 31%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* width: 150px; */
    }

    &__right-button {
      position: absolute;
      right: calc(10% + 6px);
      bottom: 9%;
    }

    &__people-won-text {
      position: absolute;
      color: #0a101b;
      font-weight: bold;
      font-size: 48px;
      line-height: 57px;
      margin-left: -140px;
    }

    &__people-won-info {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      margin-left: 8px;
    }
  }

  .confirm-asset {
    position: absolute;
    margin: 0 auto;
    margin-top: -82px;
    z-index: 999999;
    margin-left: 29%;

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

export default StyledAdminMainSection;
