import React from 'react'
import StyledCardHeader from './StyledCardheader'

interface Props {
    title:string
    viewMoreClick:Function
}

const CustomCardHeader = ({title='Header', viewMoreClick}:Props) => (
    <StyledCardHeader>
        <div className='header__title'>{title}</div>
        <div className='header__view-more' onClick={() => viewMoreClick()}> View more</div>
    </StyledCardHeader>
)

export default CustomCardHeader