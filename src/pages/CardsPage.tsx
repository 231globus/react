import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';

class CardsPage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardsList />
      </>
    );
  }
}

export default CardsPage;
