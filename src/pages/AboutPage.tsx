import Header from '../components/Header';
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <section className="content">
          <div className="about">231globus@gmail.com</div>
        </section>
      </>
    );
  }
}

export default AboutPage;
