import React from 'react'
import BadgeItem from '../../../Components/BadgeItem/BadgeItem'
import { badges } from '../../../__mocks__/badges'
import StyledBadges from './StyledBadges'

const Badges = () => (
    <StyledBadges>
        <div className='info'>
                Your badges
        </div>
        <div className='badges'>
            {badges.map(badge => <BadgeItem key={badge.imgUrl} imgUrl={badge.imgUrl} title={badge.title} />)}
        </div>
    </StyledBadges>
)

export default Badges