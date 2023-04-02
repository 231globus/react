import React from 'react';

type CardProps = {
  name: string;
  species: string;
  image: string;
};

function CardItem(props: CardProps) {
  const { name, species, image } = props;

  return (
    <section className="content" data-testid="content">
      <div className="card" data-testid="card">
        <h3 className="card__title">{name}</h3>
        <img className="card__image" src={image} alt={name} />
        <h5 className="card__price">{species}</h5>
      </div>
    </section>
  );
}

export default CardItem;
