import React, { useState } from 'react';
import { Character } from 'types/types';
import Modal from './Modal';
type CardProps = {
  character: Character;
};

function CardItem(props: CardProps) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="card" data-testid="card" onClick={() => setModal(true)}>
        <img className="card__image" src={props.character.image} alt={props.character.name} />
        <h2 className="card__title">{props.character.name}</h2>
      </div>
      {modal ? <Modal id={props.character.id} setModal={setModal} /> : <></>}
    </>
  );
}

export default CardItem;
