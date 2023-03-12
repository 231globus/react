import React from 'react';
import CardsItem from './CardsItem';

class CardsList extends React.Component {
  render() {
    return (
      <section className="content">
        {Array.from(Array(6)).map((value, index) => (
          <CardsItem id={index} key={index} />
        ))}
      </section>
    );
  }
}

export default CardsList;
