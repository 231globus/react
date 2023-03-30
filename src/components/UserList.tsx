import React, { useState } from 'react';
import Form from './Form';
import UserItem from './UserItem';
import { nanoid } from 'nanoid';
import { User } from 'types/types';

function UserList() {
  const [users, updateUsers] = useState<User[]>([]);

  const updateUserList = (user: User) => {
    updateUsers([...users, user]);
  };

  return (
    <div className="content">
      <Form updateUserList={updateUserList} />
      {users.map((value) => (
        <UserItem
          key={nanoid()}
          name={value.name}
          date={value.date}
          gender={value.gender}
          coffee={value.coffee}
          file={URL.createObjectURL(value.file['0'] as File)}
        />
      ))}
    </div>
  );
}

export default UserList;
