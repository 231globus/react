import React from 'react';
import Card from './Card';

class Cards extends React.Component {
  render() {
    return (
      <section className="content">
        {Array.from(Array(12)).map((value, index) => (
          // eslint-disable-next-line react/jsx-key
          <Card id={index} />
        ))}
      </section>
    );
  }
}

export default Cards;
