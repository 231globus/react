import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Character } from 'types/types';

type ModalProps = {
  id: number;
  setModal: (open: boolean) => void;
};

const Modal = (props: ModalProps) => {
  const [character, setCharacter] = useState<Character>();
  const [panding, setPanding] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setPanding(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error('New error');
          }
          return res.json();
        })
        .then((data) => {
          setCharacter(data);
          setPanding(false);
          setErr(null);
        })
        .catch((err) => {
          setPanding(false);
          setErr(err.message);
        });
    }, 1000);
  }, [props.id]);

  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={(e) => {
        e.currentTarget === e.target && props.setModal(false);
      }}
    >
      <div className="modal__content">
        <span className="modal__close-btn" onClick={() => props.setModal(false)}></span>
        {panding && <div className="preloader">Loading...</div>}
        {err && <div className="error">{err}</div>}
        <h1 className="modal__name">{character?.name}</h1>
        <div className="modal__container">
          <img className="modal__img" src={character?.image} alt={character?.name} />
          <div className="modal__sidebar">
            <div>{!panding && <span>Gender: {character?.gender}</span>}</div>
            <div>{!panding && <span>Species: {character?.species}</span>}</div>
            <div>{!panding && <span>Status: {character?.status}</span>}</div>
            <div>{!panding && <span>From planet: {character?.origin.name}</span>}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
