import React from 'react';
import Expand from '../FilterControl/ExpandAndReset';
import FilterList from './FilterList';
import FilterOption from './FilterOption';
import RadioButtons from './RadioButtons';

const FilterMain = ({
  characters,
  genderHandler,
  statusHandler,
  speciesHandler,
  typeHandler,
  resetFilters,
}) => {
  const genderFilter = [...new Set(characters.map(({ gender }) => gender))];
  const statusFilter = [...new Set(characters.map(({ status }) => status))];
  const speciesFilter = [...new Set(characters.map(({ species }) => species))];
  const typeFilter = [...new Set(characters.map(({ type }) => type))];

  return (
    <>
      <Expand resetFilters={resetFilters}>
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
          {/* <FilterOption handler={typeHandler} list={typeFilter} title='Types' /> */}
          {/* <RadioButtons
            title='Species'
            list={speciesFilter}
            handler={speciesHandler}
          /> */}
        </>
      </Expand>
    </>
  );
};

export default FilterMain;
