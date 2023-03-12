import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardsList />
      </>
    );
  }
}

export default HomePage;
