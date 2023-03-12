import React, { Component } from 'react';

type CardProps = {
  id: number;
};

class Card extends Component<CardProps, object> {
  render() {
    return <div>Card {this.props.id}</div>;
  }
}

export default Card;
