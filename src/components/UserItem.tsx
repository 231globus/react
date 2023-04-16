import React from 'react';
import { User } from 'types/types';

type UserProps = {
  user: User;
};

function UserItem(props: UserProps) {
  const { user } = props;

  return user ? (
    <>
      <div className="user">
        <div className="user__name user__item">
          <p className="user__title">Name:</p>
          {user.name}
        </div>
        <div className="user__file user__item">
          <p className="user__title">File:</p>
          <img
            className="user__img"
            src={user.file[0] ? URL.createObjectURL(user.file['0'] as File) : ''}
            alt="image"
          />
        </div>
        <div className="user__birth user__item">
          <p className="user__title">Data:</p>
          {user.date}
        </div>
        <div className="user__gender user__item">
          <p className="user__title">Gender:</p>
          {user.gender}
        </div>
        <div className="user__coffee user__item">
          <p className="user__title">Coffee:</p>
          Somebody {user.coffee ? 'wants' : 'doesnt want'} coffee
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default UserItem;
