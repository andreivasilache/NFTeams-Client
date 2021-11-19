import React from 'react';
import StyledLoadingBar, { ProcentLoaded, StyledLoadedBar } from './StyledLoadingBar';

const fullWidth:number = 513;
const procent_width = (procentage:number) =>((fullWidth * procentage)/100);

export const LoadingBar = (prop:any) => {

    const {procent} = prop;
    const x =`${procent_width(procent)}px`

    return(
        <StyledLoadingBar className='parent'>
            <StyledLoadedBar width={x}>
                <ProcentLoaded>{procent}%</ProcentLoaded>
            </StyledLoadedBar>
        </StyledLoadingBar>
    );
}