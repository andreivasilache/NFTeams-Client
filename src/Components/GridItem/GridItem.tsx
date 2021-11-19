import React, { ReactComponentElement } from 'react';
import StyledGrid from './StyledGridItem';

interface Props {
  children: ReactComponentElement<any>;
  height?: number;
  color?: string;
  hasBackground?: boolean
}

export const GridItem = ({ children, color = '', height, hasBackground=true }: Props) => (
  // @ts-ignore
  <StyledGrid hasBackground={hasBackground} borderColor={color} height={`${height}px`}>
    {children}
  </StyledGrid>
);
