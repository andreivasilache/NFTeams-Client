import styled from 'styled-components';

const StyledBadgeInfo = styled.div`
  .modal {
    &__title {
      color: #7efacd;
      text-transform: uppercase;
      margin-top: 40px;
      margin-left: 30px;
      width: 230px;
      text-align: center;
    }

    &__content {
      margin-top: 80px;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
      flex-flow: column;
      width: 410px;
    }

    &__badge-info {
      color: #929bc9;
      margin-top: 30px;
      font-size: 24px;
    }

    &__image {
      width: 200px;
      height: 200px;
      margin: 0 auto;
    }
  }
`;

export default StyledBadgeInfo;
