import React from 'react';
import CharacterCard from './CharacterCard';
import './style.css';

const CharacterList = ({ results }) => {
  console.log('results', results);
  return (
    <div className='list_container'>
      <CharacterCard results={results} />
    </div>
  );
};

export default CharacterList;
