import React, { useState, useEffect, Suspense } from 'react';
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
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const urlCharacters = [
    `https://rickandmortyapi.com/api/character/?name=${search}&page=${currentPage}&gender=${genderFilter}&status=${statusFilter}&type=${typeFilter}&species=${speciesFilter}`,
  ];

  const urlAll = 'https://rickandmortyapi.com/api/character';

  const fetchAllData = async (urlAll) => {
    try {
      const { data } = await axios.get(urlAll);
      setCharacters((_characters) => {
        return [..._characters, ...data.results];
      });
      if (data.info && data.info.next) {
        await fetchAllData(data.info.next);
      }
    } catch (err) {
      setError(err);
    }
  };

  const fetchDataCharacters = async () => {
    try {
      const { data } = await axios.get(urlCharacters);
      setFetchedData(data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  useEffect(() => {
    fetchAllData(urlAll);
  }, []);

  useEffect(() => {
    fetchDataCharacters();
  }, [
    search,
    currentPage,
    genderFilter,
    statusFilter,
    typeFilter,
    speciesFilter,
  ]);

  const statusHandler = (status) => {
    setStatusFilter(status);
  };

  const genderHandler = (gender) => {
    setGenderFilter(gender);
  };

  const typeHandler = (e) => {
    setTypeFilter(e.target.value);
    console.log(`e***** = `, e.target.value);
  };

  const speciesHandler = (species) => {
    setSpeciesFilter(species);
  };

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Search setSearch={setSearch} />
        <FilterOthers
          characters={characters}
          genderHandler={genderHandler}
          statusHandler={statusHandler}
          speciesHandler={speciesHandler}
          typeHandler={typeHandler}
        />
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
      </Suspense>
    </>
  );
}

export default App;