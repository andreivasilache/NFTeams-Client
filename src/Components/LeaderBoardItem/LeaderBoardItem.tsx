import React from 'react'
import StyledLeaderBoardItem from './StyledLeaderBoardItem'

interface Props{
    imgSrc:string,
    name:string,
    items:number,
    onFollowClick:Function
}

const LeaderBoardItem = ({imgSrc = '', name = '', items = 0, onFollowClick}:Props) => (
    <StyledLeaderBoardItem>
        <div className='account-info'>
            <img src={imgSrc} alt='img' className='account-info__image' />
            <span className='account-info__name'>{name}</span>
        </div>
        <div className='items'>
            {items} ITEMS
        </div>
        <div className='follow' onClick={() => onFollowClick()}>follow</div>

    </StyledLeaderBoardItem>
)

export default LeaderBoardItem