import React from 'react';
import Users from '../../Users/Users';
import StyledAddTokens from './StyledAddTokens';

interface Props {
  users: any[];
  tokensNumber?: number;
  address?: string;
  selectedUsers: any[];
  setTokens: (value: number) => void;
  setAddress: (value: string) => void;
  setSelectedUsers: (users: any[]) => void;
}

const AddTokens = ({ users = [], tokensNumber, address, selectedUsers, setSelectedUsers, setAddress, setTokens }: Props) => (
  <StyledAddTokens>
    <Users users={users} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers} />
    <div className='add-tokens__value-container'>
      <span className='add-tokens__label'>Value</span>
      <input
        placeholder='Type value'
        value={tokensNumber || ''}
        onChange={e => setTokens(parseInt(e.target.value, 10))}
        className='add-tokens__value-input'
        type='text'
      />
    </div>

    <div className='add-tokens__address-container'>
      <span className='add-tokens__label'>Address</span>
      <input
        placeholder='Type address'
        value={address}
        onChange={e => setAddress(e.target.value)}
        className='add-tokens__value-input'
        type='text'
      />
    </div>
  </StyledAddTokens>
);

export default AddTokens;
