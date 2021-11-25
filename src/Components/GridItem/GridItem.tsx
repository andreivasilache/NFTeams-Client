import React, { ReactComponentElement } from 'react';
import StyledGrid from './StyledGridItem';

interface Props {
  children: ReactComponentElement<any>;
  height?: number;
  color?: string;
  hasBackground?: boolean;
  overflowY?: boolean;
}

export const GridItem = ({ children, color = '', height, hasBackground = true, overflowY = true }: Props) => (
    // @ts-ignore
    <StyledGrid hasBackground={hasBackground} overflowY={overflowY} borderColor={color} height={`${height}px`}>
      {children}
    </StyledGrid>
  );
