import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import React from 'react';

class CardsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Cards />
        <Footer />
      </>
    );
  }
}

export default CardsPage;
