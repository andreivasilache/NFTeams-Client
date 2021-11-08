import React from 'react'
import CustomCardHeader from '../../../Components/CardHeader/CardHeader'
import StyledProfilePreview from './StyledProfilePreview'
import profilePreviewIcon from '../../../assets/png/profile-placeholder.png'

const ProfilePreview = () => (
    <StyledProfilePreview>
        <CustomCardHeader title='Outtadisearth' viewMoreClick={()=>{}} />
        <img className='image' src={profilePreviewIcon} alt='preview-image' />

        <span className='description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
    </StyledProfilePreview>
)

export default ProfilePreview