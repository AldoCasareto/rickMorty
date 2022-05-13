import React from 'react';
import './style.css';

const FilterList = ({ list, handler, title }) => {
  return (
    <section className='filter_section'>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div>
        <ul>
          {list.map((filter, index) => (
            <li key={index}>
              <button onClick={() => handler(filter)}>{filter}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterList;
