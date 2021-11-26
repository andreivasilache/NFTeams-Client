import React from 'react';
import StyledLoadingBar, { PercentLoaded, StyledLoadedBar } from './StyledLoadingBar';

const percentWidth = (percentage: number, limit: number) => (100 * percentage) / limit;

export const LoadingBar = ({ currentValue, limit }: { limit: number; currentValue: number }) => (
  <StyledLoadingBar className='parent'>
    <StyledLoadedBar width={`${percentWidth(currentValue, limit)}px`}>
      <PercentLoaded>{currentValue}</PercentLoaded>
    </StyledLoadedBar>
  </StyledLoadingBar>
);
