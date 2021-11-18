import styled from 'styled-components';

const StyledBadges = styled.div`
  padding: 10px;
  height: calc(100% - 20px);

  .info {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #d0cfcf;
    text-transform: uppercase;
  }

  .badges {
    margin-top: 10px;
    overflow: auto;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    width: calc(100% - 30px);
    height: calc(100% - 75px);
  }
`;

export default StyledBadges;
