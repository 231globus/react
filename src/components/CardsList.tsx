import React, { useEffect } from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { ActionsEnum } from '../types/cards';

function CardsList() {
  const dispatch = useDispatch();
  const { cards, loading, filter, error } = useTypeSelector((state) => state.cards);

  useEffect(() => {
    dispatch({ type: ActionsEnum.START_LOADING });
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${filter}`)
        .then((res) => {
          dispatch({ type: ActionsEnum.CLEAR_DATA });
          if (res.status !== 200) {
            throw Error(`Nothing found for your request`);
          }
          return res.json();
        })
        .then((data) => {
          dispatch({ type: ActionsEnum.FETCH_DATA, payload: data });
          dispatch({ type: ActionsEnum.STOP_LOADING });
          dispatch({ type: ActionsEnum.REMOVE_ERROR });
        })
        .catch((err) => {
          dispatch({ type: ActionsEnum.STOP_LOADING });
          dispatch({ type: ActionsEnum.ADD_ERROR, payload: err.message });
        });
    }, 1000);
  }, [dispatch, filter]);

  return (
    <>
      <Search />
      {loading && <div className="preloader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <section className="cards" data-testid="content">
        {cards ? (
          cards.results.map((value) => <CardsItem key={value.id} character={value} />)
        ) : (
          <>{')!*@$&*(#$^&*@#^$*(&@^#$*&#@^'}</>
        )}
      </section>
    </>
  );
}

export default CardsList;
