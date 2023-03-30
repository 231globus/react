import React from 'react';

type CardProps = {
  title: string;
  description: string;
  price: number;
  raiting: number;
  images: string;
};

function CardItem(props: CardProps) {
  const { title, images, price, raiting, description } = props;

  return (
    <>
      <div className="card" data-testid="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__image" src={images} alt={title} />
        <h5 className="card__price">Price: {price}$</h5>
        <div className="card__raiting">Raiting: {raiting}</div>
        <div className="card__description">{description}</div>
      </div>
    </>
  );
}

export default CardItem;
