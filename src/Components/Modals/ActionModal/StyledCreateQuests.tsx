import styled from 'styled-components';

const StyledCreateQuests = styled.div`
    position: relative;
  .quests-modal {
    &__title {
      margin-top: 45px;
      margin-left: 70px;
      width: 230px;
      text-align: center;
      text-transform: uppercase;
      color: #dd56ff;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
    }

    &__content {
      margin-top: 110px;
      margin-left: 90px;
      width: 480px;
    }

    &__input-container {
      width: 100%;
      margin: 15px 0;
      &--select{
        margin:0
      }

    }

    &__input-title {
      color: #6979f8;
      margin-bottom: 5px;
      display: flex;
    }

    &__title-image {
      width: 19px;
      height: 19px;
      margin-right: 10px;
    }

    &__input {
      width: 100%;
      border: none;
      background: transparent;
      color: white;
      border-bottom: 2px solid #6979f8;
      outline: none;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;

      &--stat-input {
        margin-left: 27px;
        width: calc(100% - 34px);
      }
    }

    &__select {
      border: 1px solid #6979f8;
      border-radius: 8px;
    }

    &__menu {
      border: 1px solid #6979f8;
      border-radius: 8px;
      margin-top: 5px;
    }

    &__menu-item {
      color: white !important;
    }

    &__stats-won {
      display: flex;
    }

    &__stat {
      width: 76px;
      margin: 10px;
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 155px;
    }

    &__select-input{
      border: 1px solid #6979F8;
      box-sizing: border-box;
      border-radius: 8px;
      width: 100%;
      background-color: transparent;
      height: 32px;
      padding: 0 10px;
      color:#E4E4E4;
      outline: none;
      cursor: pointer;
      &::placeholder{
        color:#E4E4E4
      }
    }
    &__drop-down-icon{
      position: absolute;
      right: 110px;
      margin-top:15px;
      &--active{
        transform: rotate(180deg);
      }
    }

    &__select-options{
      border: 1px solid #6979F8;
      box-sizing: border-box;
      border-radius: 8px;
      width: 100%;
      margin-top: 5px;
      height: 136px;
      overflow-y: auto;
      position: absolute;
      width: 480px;
      display: none;

      &--active{
        display: block;
      }
    }

    &__option{
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      height: 68px;
      align-items:center;
      cursor: pointer;
      margin: 10px 0;

      &:hover{
        background-color: rgba(0,0,0,0.3);
      }
    }

    &__option-image{
      height: 100%;
      margin-right:10px
    }
  }
`;
export default StyledCreateQuests;
