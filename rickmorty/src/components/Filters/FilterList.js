import React from 'react';

const FilterList = ({ list, handler, title }) => {
  return (
    <>
      <p>{title}</p>
      <ul>
        {list.map((filter, index) => (
          <li key={index}>
            <button onClick={() => handler(filter)}>{filter}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterList;
