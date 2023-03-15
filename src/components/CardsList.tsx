import React from 'react';
import CardsItem from './CardsItem';
import { products } from '../assets/dummy.json';

type Card = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type CardListState = {
  cards: Card[];
};

class CardsList extends React.Component<object, CardListState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: products,
    };
  }
  render() {
    return (
      <section className="content">
        {this.state.cards.map((value) => (
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
}

export default CardsList;
