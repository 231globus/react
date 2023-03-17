import React, { Component } from 'react';

type CardProps = {
  title: string;
  description: string;
  price: number;
  raiting: number;
  images: string;
};

class CardItem extends Component<CardProps, object> {
  render() {
    return (
      <>
        <div className="card" data-testid="card">
          <h3 className="card__title">{this.props.title}</h3>
          <img className="card__image" src={this.props.images} alt={this.props.title} />
          <div className="card__price">Price: {this.props.price}$</div>
          <div className="card__raiting">Raiting: {this.props.raiting}</div>
          <div className="card__description">{this.props.description}</div>
        </div>
      </>
    );
  }
}

export default CardItem;
