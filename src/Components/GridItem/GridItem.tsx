import React, { ReactComponentElement } from 'react';
import StyledGrid from './StyledGridItem';

interface Props {
  children: ReactComponentElement<any>;
  height?: number;
  color?: string;
}

export const GridItem = ({ children, color = '', height }: Props) => (
  // @ts-ignore
  <StyledGrid borderColor={color} height={`${height}px`}>
    {children}
  </StyledGrid>
);
