import styled from 'styled-components';

const StyledHostedAssets = styled.div`
  width: calc(100% - 20px);
  margin-left: 39px;
  height: 100%;

  position: relative;

  .hosted-assets__container {
    width: 595px;
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
    left: 160px;
    top: 10px;
  }

  .hosted-assets {
    &__content {
      position: absolute;
      width: 91%;
      height: 63%;
      top: 47px;
      left: 12px;
      display: flex;
    }

    &__badges-list {
      width: calc(70% - 80px);
      margin-right: 19px;
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
      width: 30%;
    }
  }
`;

export default StyledHostedAssets;
