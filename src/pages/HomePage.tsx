import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';
import Header from '../components/Header';

function HomePage() {
  return (
    <>
      <Header />
      <Search />
      <CardsList />
    </>
  );
}

export default HomePage;
