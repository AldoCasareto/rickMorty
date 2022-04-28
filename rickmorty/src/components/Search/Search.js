import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <div>
      <input
        type='text'
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search Characters'
      />
    </div>
  );
};

export default Search;
