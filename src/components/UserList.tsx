import React, { useState } from 'react';
import Form from './Form/Form';
import UserItem from './UserItem';
import { nanoid } from 'nanoid';

function UserList() {
  const [users, updateUsers] = useState<IForm[]>([]);
  const updateUserList = (user: IForm) => {
    updateUsers([...users, user]);
  };
  return (
    <div className="content">
      <Form updateUserList={updateUserList} />
      {users.map((value) => (
        <UserItem
          key={nanoid()}
          name={value.name}
          birth={value.date}
          gender={value.gender}
          doesUserLikeCoffe={value.coffee}
          avatar={URL.createObjectURL(value.file['0'])}
        />
      ))}
    </div>
  );
}

export default UserList;
