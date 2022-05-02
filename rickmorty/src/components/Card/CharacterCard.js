import React from 'react';
import './style.css';

const CharacterCard = ({ results }) => {
  console.log('results', results);
  return (
    <div className='container'>
      {results?.map(({ gender, image, origin, species, status, id, name }) => (
        <div key={id}>
          <img src={image} alt={name} />
          <p>{name}</p>
          <p className={`${status === 'Alive' ? 'alive' : 'dead'}`}>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterCard;
