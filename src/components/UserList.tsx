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
      {users.map((user) => (
        <UserItem key={uid(user)} user={user} />
      ))}
    </div>
  );
}

export default UserList;
