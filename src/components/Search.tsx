import React, { FormEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ActionsEnum } from '../types/cards';

function Search() {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let localRef: HTMLInputElement | null = null;
    if (input.current) localRef = input.current;
    (localRef as HTMLInputElement).value = localStorage.getItem('input') || '';
    return () => {
      localStorage.setItem('input', (localRef as HTMLInputElement).value);
    };
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: ActionsEnum.ADD_FILTER, payload: `?name=${input.current?.value}` });
  };

  return (
    <form className="search__bar" onSubmit={handleSubmit}>
      <input className="search__input" type="text" placeholder="Input name" ref={input} />
      <input className="search__submit" type="submit" value="Search" />
    </form>
  );
}

export default Search;
