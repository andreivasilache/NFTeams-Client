import styled from 'styled-components';

const StyledUsers = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 18px;

  .users {
    &__list {
      margin-top: 18px;
      height: 90px;
      overflow-y: auto;
      overflow-x:hidden;
      margin-right: 10px;
    }
  }
`;

export default StyledUsers;
