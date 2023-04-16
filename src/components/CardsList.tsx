import React from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { cardsListApi } from '../services/CardsListService';
import { useTypeSelector } from '../hooks/useTypeSelector';
import Modal from './Modal';

function CardsList() {
  const { filter } = useTypeSelector((state) => state.cardsReducer);
  const { data: cards, error, isLoading } = cardsListApi.useFetchCardsQuery(filter);
  const { show, id } = useTypeSelector((state) => state.modalReducer);

  return (
    <>
      <Search />
      {isLoading && <div className="preloader">Loading...</div>}
      {error && <div className="error">No results found for your request</div>}
      {!error && (
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
