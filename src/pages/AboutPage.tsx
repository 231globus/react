import Header from '../components/Header';
import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <>
        <Header title={window.location.pathname.slice(1)} />
        <section className="content">
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa odio perferendis
            repellat numquam eos distinctio, recusandae optio corrupti? Natus tempora sint ipsum
            quis nisi facere eaque labore fugit ratione.
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa odio perferendis
            repellat numquam eos distinctio, recusandae optio corrupti? Natus tempora sint ipsum
            quis nisi facere eaque labore fugit ratione.
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa odio perferendis
            repellat numquam eos distinctio, recusandae optio corrupti? Natus tempora sint ipsum
            quis nisi facere eaque labore fugit ratione.
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa odio perferendis
            repellat numquam eos distinctio, recusandae optio corrupti? Natus tempora sint ipsum
            quis nisi facere eaque labore fugit ratione.
          </div>
        </section>
      </>
    );
  }
}

export default AboutPage;
