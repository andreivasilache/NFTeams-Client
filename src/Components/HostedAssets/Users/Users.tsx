import React, { useState } from 'react';
import CustomCheckbox from '../../CustomCheckbox/CustomCheckbox';
import CustomInput from '../../CustomImput/CustomInput';
import CustomSquareButton from '../../CustomSquareButton/CustomSquareButton';
import StyledUsers from './StyledUsers';

interface Props{
  users:any[]
}

const Users = ({users=[]}:Props) => {
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

  const onSelectUser = (user:any) => {
    const indexOfSelectedUser = selectedUsers.findIndex(selectedUser => selectedUser === user)
    if(indexOfSelectedUser>-1){
      setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser!==user))
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  }

  console.log(users)

  return (
    <StyledUsers>
      <CustomInput />
      <div className='users__list'>
        {users.map(user => (
          <CustomCheckbox key={user.name} isChecked={selectedUsers.findIndex(selected => selected === user)>-1} label={user.email} onToggle={() => onSelectUser(user)}/>
        ))}
      </div>
      <div className='users__action'>
        <CustomSquareButton width='105px' handleClick={() => {}} text='Assign to user' />
      </div>
    </StyledUsers>
  )};

export default Users;
