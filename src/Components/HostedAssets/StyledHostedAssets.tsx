import styled from 'styled-components';

const StyledHostedAssets = styled.div`
  width: calc(100% - 20px);
  margin-left: 39px;
  height: 100%;
  z-index: 99999;
  position: relative;

  .hosted-assets__container {
    width: 640px;
    /* height: 100%; */
    min-height: 100%;
  }

  .title {
    position: absolute;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #dd56ff;
    font-weight: bold;
    font-size: 24px;
    line-height: 16px;
    left: 185px;
    top: 10px;
  }

  .hosted-assets {
    &__content {
      position: absolute;
      width: 600px;
      height: 63%;
      top: 47px;
      left: 12px;
      display: flex;
    }

    &__badges-list {
      width: calc(67% - 80px);
    }

    &__tabs {
      padding: 30px 10px;
      width: 45px;
    }

    &__tab {
      padding-bottom: 2px;
      font-size: 14px;
      line-height: 24px;
      color: #686868;
      cursor: pointer;
      margin-bottom: 5px;

      &--active {
        color: #7efacd;
        border-bottom: 2px solid #7efacd;
      }
    }

    &__users {
      width: 36%;
    }

    &__actions {
      margin-left: 85px;
      margin-top: -54px;
    }
  }
`;

export default StyledHostedAssets;
