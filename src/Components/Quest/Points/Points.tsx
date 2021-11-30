import React from 'react';
import StyledPoints from './StyledPoints';
import codeIcon from '../../../assets/png/codeIcon.png';
import socialIcon from '../../../assets/png/socialIcon.png';
import healthIcon from '../../../assets/png/healthIcon.png';
import karmaIcon from '../../../assets/png/karmaIcon.png';

export enum icons{
    code = 0,
    social = 1,
    health = 2,
    karma = 3
}
interface props{
    icon:icons;
    points:number;
}
const pointIcon = (selectedIcon:icons) =>{
    switch(selectedIcon as icons)
    {
        case icons.code:
            return codeIcon;
        case icons.social:
            return socialIcon;
        case icons.health:
            return healthIcon;
        case icons.karma:
            return karmaIcon;
        default:
            return codeIcon;
    }
}

export const Points = ({icon, points}:props) => (
    <StyledPoints>
        <img src={pointIcon(icon)}/>
        {points}
    </StyledPoints>
);
