import React from 'react';

type PaginatorProps = {
  page: number;
  setPage: (page: number) => void;
};

const Paginator = ({ page, setPage }: PaginatorProps) => {
  return (
    <div>
      <button onClick={() => setPage(page - 1)}>prev</button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
};

export default Paginator;
