import React from 'react';
import Form from './Form';
import UserItem from './UserItem';
import { uid } from 'react-uid';
import { useTypeSelector } from '../hooks/useTypeSelector';

function UserList() {
  const { users } = useTypeSelector((state) => state.usersReducer);

  return (
    <div className="content">
      <Form />
      {users.map((value) => (
        <UserItem
          key={uid(value)}
          name={value.name}
          date={value.date}
          gender={value.gender}
          coffee={value.coffee}
          file={value.file[0] ? URL.createObjectURL(value.file['0'] as File) : ''}
        />
      ))}
    </div>
  );
}

export default UserList;
