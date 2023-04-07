import React, { useEffect, useState } from 'react';
import CardsItem from './CardsItem';
import axios from 'axios';
import Search from './Search';
import { RickAndMorty } from 'types/types';
import Paginator from './Paginator';

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

  return (
    <>
      <Search setFilter={setFilter} />
      <Paginator page={page} setPage={setPage} />
      <section className="cards" data-testid="content">
        {character?.results.map((value) => (
          <CardsItem key={value.id} name={value.name} species={value.species} image={value.image} />
        ))}
      </section>
    </>
  );
}

export default CardsList;
