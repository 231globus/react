import ErrorPage from './pages/ErrorPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/FormPage';

function App() {
  return (
    <>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/styles.css"></link>
          <title>React SSR</title>
        </head>
        <body>
          <div id="root">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<UsersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </body>
      </html>
    </>
  );
}

export default App;
