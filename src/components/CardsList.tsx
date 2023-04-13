import React, { useEffect } from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import { cardsReducer } from '../store/reducers/cards.reducer';

function CardsList() {
  const dispatch = useTypeDispatch();
  const { cards, loading, filter, error } = useTypeSelector((state) => state.cardsReducer);
  const { startLoading, stopLoading, fetchData, clearData, addError, removeError } =
    cardsReducer.actions;

  useEffect(() => {
    dispatch(startLoading());
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${filter}`)
        .then((res) => {
          dispatch(clearData());
          if (res.status !== 200) {
            throw Error(`Nothing found for your request`);
          }
          return res.json();
        })
        .then((data) => {
          dispatch(fetchData(data));
          dispatch(stopLoading());
          dispatch(removeError());
        })
        .catch((err) => {
          dispatch(stopLoading());
          dispatch(addError(err.message));
        });
    }, 1000);
  }, [addError, clearData, dispatch, fetchData, filter, removeError, startLoading, stopLoading]);

  return (
    <>
      <Search />
      {loading && <div className="preloader">Loading...</div>}
      {error && <div className="error">{error}</div>}
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
