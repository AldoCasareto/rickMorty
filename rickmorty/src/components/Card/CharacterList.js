import React from 'react';
import CharacterCard from './CharacterCard';
import './style.css';

const CharacterList = ({ results, error, statusHandler, showShortlist }) => {
  return (
    <>
      {error ? (
        <div className='notification'>{error}</div>
      ) : (
        <div className='list_container'>
          <CharacterCard
            results={results}
            statusHandler={statusHandler}
            showShortlist={showShortlist}
          />
        </div>
      )}
    </>
  );
};

export default CharacterList;
