import React, { useState } from 'react';
import FilterList from './FilterList';
import FilterOption from './FilterOption';
// import FilterButton from '../Buttons/FilterButton'

const FilterOthers = ({
  characters,
  genderHandler,
  statusHandler,
  speciesHandler,
  typeHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(`characters = `, characters);
  // console.log(`characters[0].gender = `, characters?[0].id);

  //   const status = characters?.map(({ status }) => status);
  //   const gender = characters?.map(({ gender }) => gender);
  //   const species = characters?.map(({ species }) => species);
  //   const type = characters?.map(({ type }) => type);

  const ShowFilter = (filtered) => {
    console.log('filtered', filtered);
    const gender = [...new Set(characters.map(({ filtered }) => filtered))];
    console.log(`gender = `, gender);
    return gender;
  };

  const gender = 'gender';

  const genderFilter = [...new Set(characters.map(({ gender }) => gender))];
  const statusFilter = [...new Set(characters.map(({ status }) => status))];
  const speciesFilter = [...new Set(characters.map(({ species }) => species))];
  const typeFilter = [...new Set(characters.map(({ type }) => type))];

  const genderFilter3 = ShowFilter(gender);
  console.log(`genderFilter3 = `, genderFilter3);

  const genderFilter2 = [
    ...new Set(
      characters.map(({ gender, status, species, type }) => {
        return { gender, status, species, type };
      })
    ),
  ];

  console.log(`genderFilter2 = `, genderFilter2);

  console.log(`genderFilter = `, genderFilter);

  return (
    <div>
      {
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? 'Show' : 'Hide'} Filters
        </button>
      }
      {isOpen && (
        <>
          <FilterList
            title='Status'
            list={statusFilter}
            handler={statusHandler}
          />
          <FilterList
            title='Gender'
            list={genderFilter}
            handler={genderHandler}
          />
          <FilterList
            title='Species'
            list={speciesFilter}
            handler={speciesHandler}
          />
          <FilterOption handler={typeHandler} list={typeFilter} title='Types' />
        </>
      )}
    </div>
  );
};

export default FilterOthers;
