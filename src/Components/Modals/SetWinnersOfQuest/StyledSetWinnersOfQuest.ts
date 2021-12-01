import styled from 'styled-components';

export const StyledSetWinnersOfQuest = styled.div`
  && {
    margin-top: 200px;
    margin-left: 90px;
    width: 480px;
    position: relative;
    width: 483px;
    height: 483px;
  }
  .quests-modal {
    &__title {
      position: absolute;
      top: -160px;
      left: 40px;

      text-transform: uppercase;
      color: #dd56ff;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
    }
    &__label {
      margin-bottom: 20px;
    }
    &__actions {
      bottom: 54px;
      right: 7px;
      position: absolute;
    }
  }
`;
