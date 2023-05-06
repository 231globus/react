import React from 'react';
import { Character } from 'types/types';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import { modalReducer } from '../store/reducers/modal.reducer';

type CardProps = {
  character: Character;
};

function CardItem(props: CardProps) {
  const dispatch = useTypeDispatch();
  const { idModal, showModal } = modalReducer.actions;

  return (
    <>
      <div
        className="card"
        data-testid="card"
        onClick={() => {
          dispatch(idModal(props.character.id));
          dispatch(showModal());
        }}
      >
        <img className="card__image" src={props.character.image} alt={props.character.name} />
        <h2 className="card__title">{props.character.name}</h2>
      </div>
    </>
  );
}

export default CardItem;
