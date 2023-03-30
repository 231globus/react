import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const path = window.location.pathname.slice(1) + '';
  let title = 'home page';
  if (path) title = path + ' page';

  return (
    <header className="header">
      <div className="header__title">{title}</div>
      <div className="header__items">
        <Link className="header__item" to="/">
          Home
        </Link>
        <Link className="header__item" to="/form">
          Form
        </Link>
        <Link className="header__item" to="/about">
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
