import styled from 'styled-components';

const StyledBadgeItem = styled.div`
  width: 100%;
  height: 140px;
  max-width: 130px;

  .badge {
    &__title {
      width: 100%;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #e4e4e4;
      text-align: center;
      margin-top: -5px;
    }

    &--active {
      z-index: 9999999;
      position: absolute;
    }
  }
`;

export default StyledBadgeItem;
