import styled from 'styled-components';

const StyledAssetsComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  align-items: center;

  .asset {
    &__list {
      display: flex;
    }

    &__container {
      display: flex;
      flex-flow: column;
    }

    &__name {
      color: #7efacd;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      width: 75px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &--active {
        color: #dd56ff;
      }
    }

    &__pagination {
      color: white;
    }
    &__image {
      width: 76px;
      height: 76px;
      cursor: pointer;

      &--active {
        border: 1px solid #dd56ff;
        box-sizing: border-box;
        box-shadow: 0px 0px 8.52631px 3.41053px rgba(221, 86, 255, 0.72);
        border-radius: 6px;
      }
    }

    &__input-container {
      width: 100%;
      display: flex;
      justify-content: end;
    }
  }
`;

export default StyledAssetsComponent;
