import React from 'react';
import { User } from 'types/types';

function UserItem(props: User) {
  const { name, date, gender, coffee, filelink } = props;

  return (
    <>
      <div className="user">
        <div className="user__name user__item">
          <p className="user__title">Name:</p>
          {name}
        </div>
        <div className="user__file user__item">
          <p className="user__title">File:</p>
          <img className="user__img" src={filelink} alt="image" />
        </div>
        <div className="user__birth user__item">
          <p className="user__title">Data:</p>
          {date}
        </div>
        <div className="user__gender user__item">
          <p className="user__title">Gender:</p>
          {gender}
        </div>
        <div className="user__coffee user__item">
          <p className="user__title">Coffee:</p>
          Somebody {coffee ? 'wants' : 'doesnt want'} coffee
        </div>
      </div>
    </>
  );
}

export default UserItem;
