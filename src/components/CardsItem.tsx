import React, { Component } from 'react';

type CardProps = {
  id: number;
};

class CardItem extends Component<CardProps, object> {
  render() {
    return <div className="card">Card {this.props.id}</div>;
  }
}

export default CardItem;
