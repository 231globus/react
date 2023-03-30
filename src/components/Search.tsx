import React, { useEffect, useRef } from 'react';

function Search() {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let localRef: HTMLInputElement | null = null;
    if (input.current) localRef = input.current;
    console.log('mount');
    (localRef as HTMLInputElement).value = localStorage.getItem('input') || '';
    return () => {
      console.log('unmount');
      localStorage.setItem('input', (localRef as HTMLInputElement).value);
    };
  }, []);

  return (
    <>
      <input className="search form__input" type="text" placeholder="Search card" ref={input} />
    </>
  );
}

export default Search;
