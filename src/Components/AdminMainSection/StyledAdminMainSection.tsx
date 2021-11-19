import styled from 'styled-components';

const StyledAdminMainSection = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .center-background {
    position: absolute;
    top: 120px;
    width: 91%;
    left: 3%;
  }

  .left-background {
    position: absolute;
    left: 100px;
    z-index: 2;
    height: 450px;
  }

  .right-background {
    position: absolute;
    right: 110px;
    height: 450px;
  }

  .admin-main {
    &__title {
      z-index: 9999;
      position: absolute;
      left: 44%;
      top: 25%;
      color: #dd56ff;
      font-weight: bold;
      font-size: 24px;
      line-height: 16px;
    }

    &__people-won {
      z-index: 222;
      position: absolute;
      right: 10.5%;
      top: 31%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* width: 150px; */
    }

    &__people-won-text {
      position: absolute;
      color: #0a101b;
      font-weight: bold;
      font-size: 48px;
      line-height: 57px;
      margin-left: -140px;
    }

    &__people-won-info {
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      margin-left: 8px;
    }
  }
`;

export default StyledAdminMainSection;
