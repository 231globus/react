import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { modalReducer } from '../store/reducers/modal.reducer';
import { cardsListApi } from '../services/CardsListService';

type ModalProps = {
  id: number;
};

const Modal = (props: ModalProps) => {
  const { data: card, isError, isLoading } = cardsListApi.useFetchIdQuery(`${props.id}`);

  const dispatch = useDispatch();
  const { hideModal } = modalReducer.actions;

  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={(e) => {
        e.currentTarget === e.target && dispatch(hideModal());
      }}
    >
      <div className="modal__content">
        <span className="modal__close-btn" onClick={() => dispatch(hideModal())}></span>
        {isLoading && <div className="preloader">Loading...</div>}
        {isError && <div className="error">Error</div>}
        <h1 className="modal__name">{card?.name}</h1>
        <div className="modal__container">
          <img className="modal__img" src={card?.image} alt={card?.name} />
          <div className="modal__sidebar">
            <div>{!isLoading && <span>Gender: {card?.gender}</span>}</div>
            <div>{!isLoading && <span>Species: {card?.species}</span>}</div>
            <div>{!isLoading && <span>Status: {card?.status}</span>}</div>
            <div>{!isLoading && <span>From planet: {card?.origin.name}</span>}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
