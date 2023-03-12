import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
