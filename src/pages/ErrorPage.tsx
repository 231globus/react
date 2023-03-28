import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <div className="error-page">
        <p className="error-page-title">OPS 404</p>
        <Link className="header__item" to="/">
          &#10229; back to home page
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
