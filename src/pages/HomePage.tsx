import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';
import Header from '../components/Header';

function HomePage() {
  return (
    <>
      <Header title={window.location.pathname.slice(1)} />
      <Search />
      <CardsList />
    </>
  );
}

export default HomePage;
