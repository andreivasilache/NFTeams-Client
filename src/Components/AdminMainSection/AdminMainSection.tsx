import React from 'react';
import StyledAdminMainSection from './StyledAdminMainSection'
import {ReactComponent as AdminMainLeft} from '../../assets/svg/left-container.svg'
import {ReactComponent as AdminMainRight} from '../../assets/svg/right-container.svg'
import {ReactComponent as AdminMainCenter} from '../../assets/svg/main-content.svg'
import {ReactComponent as PeopleWonBadgesIcon} from '../../assets/svg/people-won-badges.svg'

const AdminMainSection = () => (
        <StyledAdminMainSection>
            <AdminMainLeft className='left-background' />
            <span className='admin-main__title'>COMAND CENTER</span>
            <div className='admin-main__people-won'>
                <PeopleWonBadgesIcon className='admin-main__people-won-background' />
                <span className='admin-main__people-won-text'>9</span>
                <span className='admin-main__people-won-info'>people won badges</span>
            </div>
            <AdminMainCenter className='center-background' />
            <AdminMainRight className='right-background' />
        </StyledAdminMainSection>

    )

export default AdminMainSection