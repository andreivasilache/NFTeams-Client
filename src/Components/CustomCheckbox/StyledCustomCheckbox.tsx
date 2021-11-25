import styled from 'styled-components';

const StyledCustomCheckbox = styled.div`
  .checkbox {
    display: block;
    position: relative;
    padding-left:25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    font-weight: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    
  }

  .checkbox-checked{
      color:#DD56FF
  }

  .checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #929BC9;
    border-radius: 3px;
    background-color:#0A101B;
    cursor: pointer;
  }

  .checkbox input:checked ~ .checkmark {
    border: 1px solid #DD56FF;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox .checkmark:after {
    left: 5px;
    top: 0;
    width: 5px;
    height: 10px;
    color:#DD56FF;
    border: solid #DD56FF;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }
`;

export default StyledCustomCheckbox;
