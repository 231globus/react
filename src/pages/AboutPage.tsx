import Header from '../components/Header';
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <section className="content">
          <div className="about">About page</div>
        </section>
      </>
    );
  }
}

export default AboutPage;
