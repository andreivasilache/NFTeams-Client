import styled from 'styled-components';

const StyledNFT = styled.div`
  margin: 60px 20px;
  .nft {
    background: #1b2128;
    border-radius: 8px;
    width: 205px;
    height: 260px;
    position: relative;

    &__image {
      width: 249px;
      height: 287px;
      margin-top: -100px;
      margin-left: -20px;
      cursor: pointer;
      &--active {
        z-index: 9999999;
        position: absolute;
      }
    }

    &__set-as-profile {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      font-size: 9px;
      color: #dd56ff;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: bold;

      position: absolute;
      bottom: 15px;
      right: 14px;
      cursor: pointer;
    }
  }
`;

export default StyledNFT;
