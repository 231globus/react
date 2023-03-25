import React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title: string;
};

class Header extends React.Component<HeaderProps, object> {
  constructor(props: HeaderProps | Readonly<HeaderProps>) {
    super(props);
  }
  render() {
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
          <Link className="header__item" to="/users">
            Users (FormTask)
          </Link>
          <Link className="header__item" to="/about">
            About
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
