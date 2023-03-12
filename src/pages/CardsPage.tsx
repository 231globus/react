import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Search from '../components/Search';

class CardsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <Cards />
        <Footer />
      </>
    );
  }
}

export default CardsPage;
