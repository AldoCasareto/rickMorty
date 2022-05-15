import React from 'react';
import CharacterCard from './CharacterCard';
import './style.css';

const CharacterList = ({ results, error, statusHandler }) => {
  console.log(`error = `, error);
  return (
    <>
      {error ? (
        <div className='notification'>{error}</div>
      ) : (
        <div className='list_container'>
          <CharacterCard results={results} statusHandler={statusHandler} />
        </div>
      )}
    </>
  );
};

export default CharacterList;
