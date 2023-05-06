import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div data-testid="nav-bar" className="header__items">
        <Link data-testid="home-page" className="header__item" to="/">
          Home
        </Link>
        <Link data-testid="form-page" className="header__item" to="/form">
          Form
        </Link>
        <Link data-testid="about-page" className="header__item" to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
