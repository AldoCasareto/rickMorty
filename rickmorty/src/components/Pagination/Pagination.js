import React from 'react';
import './style.css';

const Pagination = ({ info, setCurrentPage, currentPage }) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='next_prev'>
      {info?.prev !== null && <button onClick={previousPage}>Previous</button>}
      {info?.next !== null && <button onClick={nextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
