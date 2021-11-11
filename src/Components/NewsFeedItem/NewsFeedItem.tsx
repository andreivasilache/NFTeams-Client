import React from 'react'
import StyledNewsFeedItem from './StyledNewsFeedItem'

interface Props{
    userImg:string,
    userName:string,
    dateTime:string,
    tag:string,
    title:string,
    contentImg:string,
    content:string
}

const NewsFeedItem = ({userImg='',userName='', dateTime='', tag='', title='', contentImg='', content=''}:Props) => (
    <StyledNewsFeedItem>
        <div className='header'>
            <div className='header__details'>
                <img src={userImg} className='header__img' />
                <div className='header__title-content'>
                    <span className='header__title'>{userName}</span>
                    <span className='header__time'>{dateTime}</span>
                </div>
            </div>
            <div className='header__tag'>{tag}</div>
        </div>
        <div className='title'>{title}</div>
        <div className='content'>
            {contentImg && contentImg!=='' && <img src={contentImg} className='content__img' />}
            {content}
        </div>
    </StyledNewsFeedItem>
)

export default NewsFeedItem