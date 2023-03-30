import React, { useState } from 'react';
import CardsItem from './CardsItem';
import { products } from '../assets/dummy.json';
import { Card } from 'types/types';

function CardsList() {
  const [cards] = useState<Card[]>(products);
  return (
    <section className="content" data-testid="content">
      {cards.map((value) => (
        <CardsItem
          key={value.id}
          title={value.title}
          description={value.description}
          price={value.price}
          raiting={value.rating}
          images={value.thumbnail}
        />
      ))}
    </section>
  );
}

export default CardsList;
