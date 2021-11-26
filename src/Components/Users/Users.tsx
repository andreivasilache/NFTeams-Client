import React, { useState } from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import CustomInput from '../CustomImput/CustomInput';
// import CustomSquareButton from '../CustomSquareButton/CustomSquareButton';
import StyledUsers from './StyledUsers';

interface Props {
  users: any[];
  selectedUsers: any[];
  setSelectedUsers: (users: any[]) => void;
}

const Users = ({ users = [], selectedUsers = [], setSelectedUsers }: Props) => {
  const [filterValue, setFilterValue] = useState('');

  const onSelectUser = (user: any) => {
    const indexOfSelectedUser = selectedUsers.findIndex(selectedUser => selectedUser === user);
    if (indexOfSelectedUser > -1) {
      setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser !== user));
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  };

  return (
    <StyledUsers>
      <CustomInput value={filterValue} onChange={setFilterValue} />
      <div className='users__list'>
        {users
          .filter(user => user.email.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1)
          .map(user => (
            <CustomCheckbox
              key={user.name}
              isChecked={selectedUsers.includes(user)}
              label={user.email}
              onToggle={() => onSelectUser(user)}
            />
          ))}
      </div>
    </StyledUsers>
  );
};

export default Users;
