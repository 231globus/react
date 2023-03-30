import React from 'react';
import { User } from 'types/types';

function UserItem(props: User) {
  const { name, date, gender, coffee, file } = props;

  return (
    <>
      <div className="user">
        <div className="user__title user__item">
          <p>Name:</p>
          {name}
        </div>
        <div className="user__file user__item">
          <p>File:</p>
          <img className="user__img" src={file as string} alt="image" />
        </div>
        <div className="user__birth user__item">
          <p>Data:</p>
          {date}
        </div>
        <div className="user__gender user__item">
          <p>Gender:</p>
          {gender}
        </div>
        <div className="user__coffee user__item">
          <p>Coffee:</p>
          Somebody {coffee ? 'wants' : 'doesnt want'} coffee
        </div>
      </div>
    </>
  );
}

export default UserItem;
