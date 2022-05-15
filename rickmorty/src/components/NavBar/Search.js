import React from 'react';
import './style.css';

const Search = ({ setSearch, setError }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setError(false);
  };

  return (
    <>
      <input
        type='text'
        autoFocus
        onChange={handleChange}
        placeholder='Search Characters'
      />
    </>
  );
};

export default Search;
