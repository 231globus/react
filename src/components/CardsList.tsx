import React, { useEffect, useState } from 'react';
import CardsItem from './CardsItem';
import axios from 'axios';
import Search from './Search';
import { RickAndMorty } from 'types/types';

function CardsList() {
  const [character, setCharacter] = useState<RickAndMorty>();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getCharacter();
  });

  async function getCharacter() {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}${filter}`).then((res) => {
      setCharacter(res.data);
    });
  }

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }

  return (
    <>
      <Search setFilter={setFilter} />
      <div>
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
      </div>
      <section className="content" data-testid="content">
        {character?.results.map((value) => (
          <CardsItem key={value.id} name={value.name} species={value.species} image={value.image} />
        ))}
      </section>
    </>
  );
}

export default CardsList;
