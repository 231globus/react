import React, { Component } from 'react';
import Form from './Form/Form';
import UserItem from './UserItem';
import { nanoid } from 'nanoid';

class UserList extends Component<object, UserListState> {
  constructor(props: object) {
    super(props);
    this.updateUserList = this.updateUserList.bind(this);
    this.state = {
      users: [],
    };
  }
  updateUserList(user: IForm) {
    this.setState({ users: [...this.state.users, user] });
  }
  render() {
    return (
      <div className="content">
        <Form updateUserList={this.updateUserList} />
        {this.state.users.map((value) => (
          <UserItem
            key={nanoid()}
            name={value.name}
            birth={value.date}
            gender={value.gender}
            doesUserLikeCoffe={value.coffee}
            avatar={value.file}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
