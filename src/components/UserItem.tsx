import React from 'react';

type UserProps = {
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

function UserItem(props: UserProps) {
  const { name, birth, gender, doesUserLikeCoffe, avatar } = props;
  return (
    <>
      <div className="user">
        <div className="user__title user__item">
          <p>Name:</p>
          {name}
        </div>
        <div className="user__file user__item">
          <p>File:</p>
          <img className="user__img" src={avatar} alt="image" />
        </div>
        <div className="user__birth user__item">
          <p>Data:</p>
          {birth}
        </div>
        <div className="user__gender user__item">
          <p>Gender:</p>
          {gender}
        </div>
        <div className="user__coffee user__item">
          <p>Coffee:</p>
          Somebody {doesUserLikeCoffe ? 'wants' : 'doesnt want'} coffee
        </div>
      </div>
    </>
  );
}

export default UserItem;
