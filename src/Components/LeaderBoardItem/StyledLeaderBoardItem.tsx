import styled from 'styled-components';

const StyledLeaderBoardItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 10px);
  padding: 10px 0;
  padding-right: 10px;

  .account-info {
    display: flex;
    &__image {
      border-radius: 50%;
      margin-right: 10px;
      width: 28px;
      height: 28px;
    }

    &__name {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: white;
      width: 120px;
      text-overflow: ellipsis;
    }
  }

  .items {
    font-weight: bold;
    font-size: 9px;
    line-height: 16px;
    color: #586e89;
  }

  .follow {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #6979f8;
    cursor: pointer;
  }
`;

export default StyledLeaderBoardItem;
