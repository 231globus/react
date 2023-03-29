import React, { ChangeEvent, useEffect, useState } from 'react';

type SearchState = {
  value: string;
};

function Search() {
  const [input, setInput] = useState<SearchState>({ value: '' });
  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setInput({ value: target.value });
  };

  useEffect(() => {
    setInput({ value: localStorage.getItem('input') as string });
    return () => {
      localStorage.input = input.value;
    };
  }, [input.value]);

  return (
    <>
      <input
        className="search form__input"
        type="text"
        placeholder="Search card"
        value={input.value}
        onChange={handleChange}
      />
    </>
  );
}

export default Search;
