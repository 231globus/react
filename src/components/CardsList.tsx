import React from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { cardsListApi } from '../services/CardsListService';
import { useTypeSelector } from '../hooks/useTypeSelector';

function CardsList() {
  const { filter } = useTypeSelector((state) => state.cardsReducer);
  const { data: cards, error, isLoading } = cardsListApi.useFetchCardsQuery(filter);

  return (
    <>
      <Search />
      {isLoading && <div className="preloader">Loading...</div>}
      {error && <div className="error">API loading error</div>}
      <section className="cards" data-testid="content">
        {cards ? (
          cards.results.map((value) => <CardsItem key={value.id} character={value} />)
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default CardsList;
