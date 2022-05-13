import React from 'react';

const FilterOption = ({ handler, list, title }) => {
  return (
    <section className='filter_section'>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
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
      </div>
    </section>
  );
};

export default FilterOption;
