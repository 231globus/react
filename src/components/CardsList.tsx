import React, { useEffect, useState } from 'react';
import CardsItem from './CardsItem';
import axios from 'axios';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type RickAndMorty = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
};

function CardsList() {
  const [character, setCharacter] = useState<RickAndMorty>();

  async function getCharacter() {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      setCharacter(res.data);
    });
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <section className="content" data-testid="content">
      {character?.results.map((value) => (
        <CardsItem
          key={value.id}
          title={value.name}
          description={value.species}
          price={value.id}
          raiting={value.id}
          images={value.image}
        />
      ))}
    </section>
  );
}

export default CardsList;
