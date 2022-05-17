import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ShortList = ({ handleShortlist }) => {
  return (
    <>
      <FaHeart onClick={() => handleShortlist()} className='shortlist' />
    </>
  );
};

export default ShortList;
