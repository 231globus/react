import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { modalReducer } from '../store/reducers/modal.reducer';
import { fetchId } from '../store/reducers/cards.reducer';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import { useTypeSelector } from '../hooks/useTypeSelector';

type ModalProps = {
  id: number;
};

const Modal = (props: ModalProps) => {
  const dispatch = useTypeDispatch();
  const { hideModal } = modalReducer.actions;
  const { card, isLoading, isError } = useTypeSelector((state) => state.cardsReducer);
  useEffect(() => {
    dispatch(fetchId(props.id));
  }, [dispatch, props.id]);

  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={(e) => {
        e.currentTarget === e.target && dispatch(hideModal());
      }}
    >
      <div className="modal__content">
        <>
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
        </>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
