import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import CharacterList from './components/Card/CharacterList';
import Pagination from './components/Pagination/Pagination';
import FilterMain from './components/Filters/FilterMain';
import Navbar from './components/NavBar/Navbar';

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [showShortlist, setShowShortlist] = useState(false);

  //query fetch url
  const urlCharacters = [
    `https://rickandmortyapi.com/api/character/?name=${search}&page=${currentPage}&gender=${genderFilter}&status=${statusFilter}&type=${typeFilter}&species=${speciesFilter}`,
  ];

  // url to fetch characters
  const urlAll = 'https://rickandmortyapi.com/api/character';

  // fetch ALL character data
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
      console.error(error);
    }
  };

  // fetch characters with pagination
  const fetchDataCharacters = async () => {
    try {
      const { data } = await axios.get(urlCharacters);
      setFetchedData(data);
    } catch (error) {
      setError(error.response.data.error);
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

  // handlers

  const statusHandler = (status, index) => {
    setStatusFilter(status);
    console.log(`index = `, index);
  };

  const genderHandler = (gender, index) => {
    setGenderFilter(gender);
  };

  const typeHandler = (e, index) => {
    setTypeFilter(e.target.value);
  };

  const speciesHandler = (species, index) => {
    setSpeciesFilter(species);
  };

  const handleShortlist = () => {
    setShowShortlist(!showShortlist);
  };

  const resetFilters = () => {
    setGenderFilter('');
    setStatusFilter('');
    setSpeciesFilter('');
    setTypeFilter('');
  };

  return (
    <div className='container'>
      <Navbar
        setSearch={setSearch}
        setError={setError}
        handleShortlist={handleShortlist}
      />
      <Suspense fallback={<h1>Loading...</h1>}>
        <FilterMain
          characters={characters}
          genderHandler={genderHandler}
          statusHandler={statusHandler}
          speciesHandler={speciesHandler}
          typeHandler={typeHandler}
          resetFilters={resetFilters}
        />
        <CharacterList
          showShortlist={showShortlist}
          results={results}
          error={error}
          statusHandler={statusHandler}
        />
        <Pagination
          setCurrentPage={setCurrentPage}
          info={info}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  );
}

export default App;
