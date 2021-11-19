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
    &__pagination {
      color: white;
    }
    &__image {
      width: 76px;
      height: 76px;
    }

    &__input-container {
      width: 100%;
      display: flex;
      justify-content: end;
    }
  }
`;

export default StyledAssetsComponent;
