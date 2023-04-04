import React, { useState } from 'react';
import Form from './Form';
import UserItem from './UserItem';
import { uid } from 'react-uid';
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
          key={uid(value)}
          name={value.name}
          date={value.date}
          gender={value.gender}
          coffee={value.coffee}
          file={value.file}
          filelink={value.filelink}
        />
      ))}
    </div>
  );
}

export default UserList;
