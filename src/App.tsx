import About from './components/About';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
