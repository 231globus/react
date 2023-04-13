import { useTypeSelector } from '../hooks/useTypeSelector';
import React from 'react';
import { Character } from 'types/types';
import Modal from './Modal';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import { modalReducer } from '../store/reducers/modal.reducer';

type CardProps = {
  character: Character;
};

function CardItem(props: CardProps) {
  const dispatch = useTypeDispatch();
  const { show } = useTypeSelector((state) => state.modalReducer);
  const { showModal } = modalReducer.actions;
  return (
    <>
      <div className="card" data-testid="card" onClick={() => dispatch(showModal())}>
        <img className="card__image" src={props.character.image} alt={props.character.name} />
        <h2 className="card__title">{props.character.name}</h2>
      </div>
      {show ? <Modal id={props.character.id} /> : <></>}
    </>
  );
}

export default CardItem;
