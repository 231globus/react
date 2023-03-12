import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import React from 'react';

class CardsPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="cards">Cards</div>
        <Footer />
      </>
    );
  }
}

export default CardsPage;
