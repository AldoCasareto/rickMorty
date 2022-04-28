import React from 'react';

const Pagination = ({ info, setCurrentPage, currentPage }) => {
  console.log(info);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {info?.prev !== null && <button onClick={previousPage}>back</button>}
      {info?.next !== null && <button onClick={nextPage}>next</button>}
    </div>
  );
};

export default Pagination;
