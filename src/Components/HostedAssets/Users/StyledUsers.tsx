import styled from 'styled-components';

const StyledUsers = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 18px;

  .users {
    &__list {
      margin-top: 5px;
      height: 102px;
      overflow-y: auto;
      margin-right: 8px;
      margin-left:10px
    }

    &__action {
      margin-top: 8px;
      margin-left: 55px;
    }
  }
`;

export default StyledUsers;
