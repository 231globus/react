import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';
import Header from '../components/Header';
import Form from '../components/Form';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <main className="main">
          <div className="sidebar">
            <Search />
            <Form />
          </div>
          <CardsList />
        </main>
      </>
    );
  }
}

export default HomePage;
