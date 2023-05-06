import { useTypeDispatch } from '../hooks/useTypeDispatch';
import React, { FormEvent, useEffect, useRef } from 'react';
import { cardsReducer } from '../store/reducers/cards.reducer';
import { useTypeSelector } from '../hooks/useTypeSelector';

function Search() {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useTypeDispatch();
  const { addFilter } = cardsReducer.actions;
  const { filter } = useTypeSelector((state) => state.cardsReducer);

  useEffect(() => {
    let localRef: HTMLInputElement | null = null;
    if (input.current) localRef = input.current;
    (localRef as HTMLInputElement).value = filter;
  }, [filter]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(addFilter(input.current?.value));
  };

  return (
    <form className="search__bar" onSubmit={handleSubmit}>
      <input className="search__input" type="text" placeholder="Input name" ref={input} />
      <input className="search__submit" type="submit" value="Search" />
    </form>
  );
}

export default Search;
