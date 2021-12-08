import styled from 'styled-components';

const StyledEvents = styled.div`
  margin: 0px 32px;
  margin-top: 24px;
  height: calc(100% - 24px);

  .users-news {
    margin-top: 30px;
    height: calc(100% - 54px);
    font-size: 14px;
    align-items: center;
    overflow-y: auto;
  }
  .event {
    display: flex;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 7px;

    &__logo {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      margin-right: 10px;
      margin-top: 5px;
    }

    &__method {
      padding: 1px 6px;
      border: 1px solid gray;
      border-radius: 9px;
    }

    &__redirect {
      cursor: pointer;
      margin-left: 10px;
      margin-top: 5px;
    }
  }
`;

export default StyledEvents;
