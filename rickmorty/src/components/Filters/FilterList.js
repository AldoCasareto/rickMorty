import React, { useState } from 'react';
import './style.css';

const FilterList = ({ list, handler, title }) => {
  return (
    <section className='filter_section'>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div>
        <ul className='filter_buttons'>
          {list.map((filter, index) => (
            <li key={index}>
              <button
                className='button_filter'
                onClick={() => handler(filter, index)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterList;
