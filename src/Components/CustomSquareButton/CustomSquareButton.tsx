import React from 'react'
import StyledCustomSquareButton from './StyledCustomSquareButton'
import {ReactComponent as ButtonCorners} from '../../assets/svg/buttonCorners.svg'

interface Props {
    text:string;
    handleClick:() => void
}

const CustomSquareButton = ({text='', handleClick}:Props) => (
    <StyledCustomSquareButton onClick={handleClick}>
        {text}
        <ButtonCorners className='corners' />
    </StyledCustomSquareButton>
)

export default CustomSquareButton