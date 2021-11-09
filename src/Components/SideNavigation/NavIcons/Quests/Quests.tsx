
import React from 'react'

interface Props{
    backgroundColor?:string
}

const QuestsIcon = ({backgroundColor = '#364659'}:Props) => (

        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.71 15.89L9.5 25L14.5 22L19.5 25L18.29 15.88M21.5 10C21.5 13.866 18.366 17 14.5 17C10.634 17 7.5 13.866 7.5 10C7.5 6.13401 10.634 3 14.5 3C18.366 3 21.5 6.13401 21.5 10Z" stroke={backgroundColor} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 17L12.3125 16.5625L14.5 17.5V22L9.5 24.5L11 16L11.5833 16.25L9.5 15L8.5 13L7.5 10V8.5L8.5 6.5L9.5 5L10.5 4L12 3.5L13.5 3H14.5V17Z" fill={backgroundColor}/>
        <path d="M14.5 17L12 16.5L9.5 15L8.5 13L7.5 10V8.5L8.5 6.5L9.5 5L10.5 4L12 3.5L13.5 3H14.5V17ZM14.5 17.5V22L9.5 24.5L11 16L14.5 17.5Z" stroke={backgroundColor} strokeWidth="0.5"/>
        </svg>
    )


export default QuestsIcon




