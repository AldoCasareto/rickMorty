import React from 'react';
import './style.css';

const RadioButtons = ({ list, handler, title }) => {
  console.log('RADIOlist', list);
  console.log(`RADIOtitle = `, title);
  return (
    <section className='filter_section'>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div>
        {list.map((filter, index) => (
          <>
            <input
              type='radio'
              value={filter}
              name='filter'
              key={index}
              onChange={() => handler(filter)}
            ></input>
            <label>{filter}</label>
          </>
        ))}
      </div>
    </section>
  );
};

export default RadioButtons;
