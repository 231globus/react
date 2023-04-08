import React, { useEffect, useState } from 'react';
import CardsItem from './CardsItem';
import Search from './Search';
import { RickAndMorty } from 'types/types';

function CardsList() {
  const [character, setCharacter] = useState<RickAndMorty>(null);
  const [panding, setPanding] = useState(true);
  const [filter, setFilter] = useState('');
  const [err, setErr] = useState(null);

  useEffect(() => {
    setPanding(true);
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/${filter}`)
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
  }, [filter]);

  return (
    <>
      <Search setFilter={setFilter} />
      {panding && <div className="preloader">Loading...</div>}
      {err && <div className="error">{err}</div>}
      <section className="cards" data-testid="content">
        {character?.results.map((value) => (
          <CardsItem key={value.id} character={value} />
        ))}
      </section>
    </>
  );
}

export default CardsList;
