import React, { useState } from 'react';

const Expand = ({ children, resetFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='filter_button'>
      {
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? 'Show' : 'Hide'} Filters
          </button>
          <button onClick={resetFilters}>Reset Filters</button>
        </>
      }
      {isOpen && children}
    </section>
  );
};

export default Expand;
