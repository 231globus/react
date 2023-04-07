import React from 'react';

type CardProps = {
  name: string;
  species: string;
  image: string;
};

function CardItem(props: CardProps) {
  const { name, species, image } = props;

  return (
    <div className="card" data-testid="card">
      <img className="card__image" src={image} alt={name} />
      <h3 className="card__title">{name}</h3>
      <h5 className="card__price">{species}</h5>
    </div>
  );
}

export default CardItem;
