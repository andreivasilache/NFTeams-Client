import styled from 'styled-components';

const StyledHeader = styled.div`
  background: linear-gradient(84.24deg, #6148d6 15.44%, #3b25b0 75.09%), #090c10;
  color: white;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  width: calc(100% - 30px);

  .left-panel {
    display: flex;
    align-items: center;
    height: 100%;
    &__logo {
      margin-left: 20px;
    }

    &__level-icon {
      margin: 0 25px;
    }

    &__info {
      color: white;
      margin-left: 70px;
      display: flex;
      align-items: center;
      width: 415px;
      justify-content: space-around;
    }

    &__finance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 58px;
      margin-left: 20px;
    }

    &__finance-value {
      font-weight: 700;
    }
  }
  .right-panel {
    display: flex;
    align-items: center;

    &__welcome {
      margin: 0 10px;
    }

    &__search {
      padding-right: 20px;
      margin-top: 5px;
      margin-right: 10px;
      border-right: 1px solid #6979f8;
      display: flex;
      align-items: center;
      width: 85px;
      justify-content: space-between;
    }
    &__profile-picture {
      width: 48px;
      height: 48px;
      border-radius: 71px;
    }
  }
`;

export default StyledHeader;
