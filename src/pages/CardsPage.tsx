import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import CardsList from '../components/CardsList';

class CardsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <CardsList />
        <Footer />
      </>
    );
  }
}

export default CardsPage;
