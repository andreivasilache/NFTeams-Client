import React from 'react';
import StyledLoadingBar, { PercentLoaded, StyledLoadedBar } from './StyledLoadingBar';

const fullWidth: number = 513;
const percentWidth = (procentage: number) => (fullWidth * procentage) / 100;

export const LoadingBar = ({ percent }: { percent: number }) => (
  <StyledLoadingBar className='parent'>
    <StyledLoadedBar width={`${percentWidth(percent)}px`}>
      <PercentLoaded>{percent}%</PercentLoaded>
    </StyledLoadedBar>
  </StyledLoadingBar>
);
