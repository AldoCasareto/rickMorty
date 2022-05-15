import React from 'react';

const CharacterCard = ({ results, statusHandler }) => {
  const statusClassName = (status) => {
    switch (status) {
      case 'Alive':
        return 'alive';
      case 'Dead':
        return 'dead';
      default:
        return 'unknown';
    }
  };

  return (
    <>
      {results?.map(({ gender, image, origin, species, status, id, name }) => (
        <div className='character_card' key={id}>
          <img src={image} alt={name} />
          <h4>{name}</h4>
          <p
            onClick={() => statusHandler(status)}
            className={`${statusClassName(status)} status`}
          >
            {status}
          </p>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      ))}
    </>
  );
};

export default CharacterCard;
