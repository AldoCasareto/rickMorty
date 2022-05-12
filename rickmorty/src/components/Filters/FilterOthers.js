import React from 'react';
import Expand from '../Button/Expand';
import FilterList from './FilterList';
import FilterOption from './FilterOption';

const FilterOthers = ({
  characters,
  genderHandler,
  statusHandler,
  speciesHandler,
  typeHandler,
}) => {
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

  console.log(`genderFilter = `, genderFilter);

  return (
    <>
      <Expand>
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
      </Expand>
    </>
  );
};

export default FilterOthers;
