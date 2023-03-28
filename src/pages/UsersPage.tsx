import React from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';

function UsersPage() {
  return (
    <>
      <Header title={window.location.pathname.slice(1)} />
      <UserList />
    </>
  );
}

export default UsersPage;
