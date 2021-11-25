import React from 'react';

interface Props {
  backgroundColor?: string;
  isActive: boolean;
}

const AdminIcon = ({ backgroundColor = '#364659', isActive = false }: Props) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    filter={`${isActive ? 'drop-shadow(0px 2px 4px #00FFD1)' : ''}`}
  >
    <path
      d='M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 9 13.5 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 13.5 11 11 1Z'
      fill={backgroundColor}
      stroke={backgroundColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 11C21 16.5228 16.5228 21 11 21M21 11C21 5.47715 16.5228 1 11 1M21 11H1M11 21C5.47715 21 1 16.5228 1 11M11 21C9 13.5 14.9228 14.708 15 11C14.9228 7.29203 13.5013 3.73835 11 1M11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 13.5 11 11 1M1 11C1 5.47715 5.47715 1 11 1'
      stroke={backgroundColor}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default AdminIcon;
