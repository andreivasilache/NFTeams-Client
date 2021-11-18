import styled from 'styled-components';

const StyledTokensAndStats = styled.div`
  padding-top: 32px;
  padding-left: 24px;

  .info {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #d0cfcf;
    text-transform: uppercase;
  }

  .transactions {
    margin-top: 48px;
    width: 620px;

    &__redirect {
      width: 51px;
    }

    th {
      text-align: left;
      color: #586e89;
      font-size: 9px;
      text-transform: uppercase;
      padding-bottom: 16px;
    }

    td {
      font-size: 16px;
      color: white;
      margin-bottom: 14px;
      padding: 6px 0px;
      height: 24px;
    }
  }
`;

export default StyledTokensAndStats;
