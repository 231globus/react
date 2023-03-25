import React, { Component } from 'react';
import Form from './Form/Form';
import UserItem from './UserItem';

type User = {
  id: number;
  name: string;
  birth: string;
  gender: string;
  doesUserLikeCoffe: boolean;
  avatar: string;
};

type UserListState = {
  users: User[];
};

class UserList extends Component<object, UserListState> {
  constructor(props: object) {
    super(props);
    this.updateUserList = this.updateUserList.bind(this);
    this.state = {
      users: [],
    };
  }
  updateUserList(user: User) {
    this.setState({ users: [...this.state.users, user] });
  }
  render() {
    console.log(this.state);
    return (
      <div className="content">
        <Form updateUserList={this.updateUserList} />
        {this.state.users.map((value) => (
          <UserItem
            key={value.id}
            name={value.name}
            birth={value.birth}
            gender={value.gender}
            doesUserLikeCoffe={value.doesUserLikeCoffe}
            avatar={value.avatar}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
