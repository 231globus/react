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

  useEffect(() => {
    setPanding(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
        .then((res) => res.json())
        .then((data) => {
          setCharacter(data);
          setPanding(false);
        });
    }, 1000);
  }, [props.id]);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__content">
        {panding && <div className="preloader">Loading...</div>}
        <h1>{character?.name}</h1>
        <h3>{character?.gender}</h3>
        <img src={character?.image} alt={character?.name} />
        <p>{character?.species}</p>
        <p>{character?.status}</p>
        <p>{character?.origin.name}</p>
        <button onClick={() => props.setModal(false)}>close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
