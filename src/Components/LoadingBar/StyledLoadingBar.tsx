import styled from 'styled-components';

interface Props {
  width: string;
}

const StyledLoadingBar = styled.div`
  width: 513px;
  height: 21px;
  border-radius: 14px;
  background-color: rgba(120, 99, 224, 0.3);
`;
export const StyledLoadedBar = styled.div<Props>`
  position: relative;
  width: ${props => props.width};
  height: 21px;
  border-radius: 14px;
  background: #7efacd;
`;
export const PercentLoaded = styled.div`
  position: absolute;
  top: 3px;
  right: 10px;

  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #07090c;
`;

export default StyledLoadingBar;
