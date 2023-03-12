import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <h1>Привет! Меня зовут Слава</h1>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
