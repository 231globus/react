import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';

class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>404 Ops</div>
        <Footer />
      </>
    );
  }
}

export default ErrorPage;
