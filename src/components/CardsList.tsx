import React, { useEffect, useState } from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { RickAndMorty } from 'types/types';
import Paginator from './Paginator';

function CardsList() {
  const [character, setCharacter] = useState<RickAndMorty>(null);
  const [panding, setPanding] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setPanding(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}${filter}`)
        .then((res) => res.json())
        .then((data) => {
          setCharacter(data);
          setPanding(false);
        });
    }, 1000);
  }, [filter, page]);

  return (
    <>
      <Search setFilter={setFilter} />
      <Paginator page={page} setPage={setPage} />
      {panding && <div className="preloader">Loading...</div>}
      <section className="cards" data-testid="content">
        {character?.results.map((value) => (
          <CardsItem key={value.id} character={value} />
        ))}
      </section>
    </>
  );
}

export default CardsList;
