import styled from 'styled-components';

const StyledUploadFiles = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 70px);
  z-index: 999;

  .upload-files {
    &__img {
      position: absolute;
      top: 0;
      left: 46px;
    }

    &__title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 53px;
      margin-left: 271px;
      width: 185px;
    }

    &__description {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 93px;
      margin-left: 229px;
      /* width: px */
    }

    &__upload-title-input {
      background-color: #0a101b;
      border: 1px solid #7efacd;
      box-sizing: border-box;
      border-radius: 59.1676px;
      width: 150px;
      height: 30px;
      color: #686868;
      padding: 0 10px;
    }
    &__upload-description-input {
      border: 1px solid #7efacd;
      box-sizing: border-box;
      border-radius: 9px;
      background: #0a101b;
      width: 291px;
      height: 90px;
      color: #686868;
      padding: 10px;
    }

    &__upload-button {
      position: absolute;
      bottom: 48px;
      right: 0;
    }

    &__uploaded-file-container {
      position: absolute;
      right: -15px;
      top: 82px;
    }

    &__upload-file-button {
      position: absolute;
      right: 2px;
      top: 35.5%;
    }

    &__info {
      position: absolute;
      right: 9%;
      top: 45%;
      color: #686868;
      max-width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__type-selection {
      top: 65%;
      position: absolute;
      left: 421px;
    }

    &__type-selection-title {
      margin-top: 5px;
    }
  }
`;

export default StyledUploadFiles;
