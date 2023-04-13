import { useTypeSelector } from '../hooks/useTypeSelector';
import React from 'react';
import { SHOW_POP_UP } from '../types/popup';
import { Character } from 'types/types';
import Modal from './Modal';
import { useTypeDispatch } from '../hooks/useTypeDispatch';

type CardProps = {
  character: Character;
};

function CardItem(props: CardProps) {
  const dispatch = useTypeDispatch();
  const { popup } = useTypeSelector((state) => state);

  const showModal = () => {
    dispatch({
      type: SHOW_POP_UP,
    });
  };

  return (
    <>
      <div className="card" data-testid="card" onClick={() => showModal()}>
        <img className="card__image" src={props.character.image} alt={props.character.name} />
        <h2 className="card__title">{props.character.name}</h2>
      </div>
      {popup.show ? <Modal id={props.character.id} /> : <></>}
    </>
  );
}

export default CardItem;
