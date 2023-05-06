import React, { useEffect } from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Modal from './Modal';
import { fetchCards } from '../store/reducers/cards.reducer';
import { useTypeDispatch } from '../hooks/useTypeDispatch';

function CardsList() {
  const { show, id } = useTypeSelector((state) => state.modalReducer);
  const { cards, isLoading, isError, filter } = useTypeSelector((state) => state.cardsReducer);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    dispatch(fetchCards(filter));
  }, [dispatch, filter]);

  return (
    <>
      <Search />
      {isLoading && <div className="preloader">Loading...</div>}
      {isError && <div className="error">No results found for your request</div>}
      {!isError && (
        <section className="cards" data-testid="content">
          {cards ? (
            cards.results.map((value) => <CardsItem key={value.id} character={value} />)
          ) : (
            <></>
          )}
        </section>
      )}
      {show ? <Modal id={id} /> : <></>}
    </>
  );
}

export default CardsList;
