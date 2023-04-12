import { useTypeSelector } from '../hooks/useTypeSelector';
import React from 'react';
import { useDispatch } from 'react-redux';
import { SHOW_POP_UP } from '../types/popup';
import { Character } from 'types/types';
import Modal from './Modal';

type CardProps = {
  character: Character;
};

function CardItem(props: CardProps) {
  const dispatch = useDispatch();

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
