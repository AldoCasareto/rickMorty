import React from 'react';

const FilterOption = ({ handler, list, title }) => {
  return (
    <>
      <p>{title}</p>
      <select onChange={handler}>
        <option value=''>All types</option>
        {list
          .filter((empty) => empty)
          .map((filter, index) => (
            <option value={filter.value} key={index}>
              {filter}
            </option>
          ))}
      </select>
    </>
  );
};

export default FilterOption;
