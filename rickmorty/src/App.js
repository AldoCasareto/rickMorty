import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/Card/CharacterCard';
import Search from './components/Search/Search';
import Pagination from './components/Pagination/Pagination';
import FilterOthers from './components/Filters/FilterOthers';

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log('current page', currentPage);

  const urlCharacters = [
    `https://rickandmortyapi.com/api/character/?name=${search}&page=${currentPage}`,
  ];

  const fetchDataCharacters = async () => {
    try {
      const { data } = await axios.get(urlCharacters);
      setFetchedData(data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  console.log(info);

  useEffect(() => {
    fetchDataCharacters();
  }, [search, currentPage]);

  return (
    <>
      <Search setSearch={setSearch} />
      <FilterOthers results={results} />
      <Pagination
        setCurrentPage={setCurrentPage}
        info={info}
        currentPage={currentPage}
      />
      <CharacterCard results={results} />
      <Pagination
        setCurrentPage={setCurrentPage}
        info={info}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
