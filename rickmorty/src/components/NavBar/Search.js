import React from 'react';
import './style.css';

const Search = ({ setSearch }) => {
  return (
    <>
      <input
        type='text'
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Characters'
      />
    </>
  );
};

export default Search;
