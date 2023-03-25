import React, { Component } from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';

class UsersPage extends Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <UserList />
      </>
    );
  }
}

export default UsersPage;
