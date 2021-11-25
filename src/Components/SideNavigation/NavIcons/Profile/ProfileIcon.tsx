import React from 'react';

interface Props {
  backgroundColor?: string;
  isActive: boolean;
}

const ProfileIcon = ({ backgroundColor = '#364659', isActive = false }: Props) => (
  <svg
    width='29'
    height='28'
    viewBox='0 0 29 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    filter={`${isActive ? 'drop-shadow(0px 2px 4px #00FFD1)' : ''}`}
  >
    <path
      d='M22.5 23V21C22.5 19.9391 22.0786 18.9217 21.3284 18.1716C20.5783 17.4214 19.5609 17 18.5 17H10.5C9.43913 17 8.42172 17.4214 7.67157 18.1716C6.92143 18.9217 6.5 19.9391 6.5 21V23M18.5 9C18.5 11.2091 16.7091 13 14.5 13C12.2909 13 10.5 11.2091 10.5 9C10.5 6.79086 12.2909 5 14.5 5C16.7091 5 18.5 6.79086 18.5 9Z'
      stroke={backgroundColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.5 17L7 23V20.5V19.5L8.72866 17.7713C8.90334 17.5967 9.1365 17.4928 9.38321 17.4798L18.5 17Z'
      fill={backgroundColor}
      stroke={backgroundColor}
      strokeWidth='0.5'
    />
    <path
      d='M14.5 13V5L13.5 5.5L12 6L11.5 7L10.5 8V10L11.5 11L12 12L14.5 13Z'
      fill={backgroundColor}
      stroke={backgroundColor}
      strokeWidth='0.5'
    />
  </svg>
);

export default ProfileIcon;
