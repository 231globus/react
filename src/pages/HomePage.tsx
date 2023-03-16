import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';
import Header from '../components/Header';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <Search />
        <CardsList />
      </>
    );
  }
}

export default HomePage;
