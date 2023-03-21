import ErrorPage from './pages/ErrorPage';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
