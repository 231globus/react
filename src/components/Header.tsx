import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    );
  }
}

export default Header;
