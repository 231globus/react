import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to="https://github.com/231globus">GitHub</Link>
        <Link to="https://rs.school/">RSSchool</Link>
      </footer>
    );
  }
}

export default Footer;
