import React, { useState } from 'react';

const Expand = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? 'Show' : 'Hide'} Filters
        </button>
      }
      {isOpen && children}
    </>
  );
};

export default Expand;
