import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CharacterCard = ({ results, statusHandler }) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [shortlist, setShortlist] = useState([]);

  const handleStatusClick = (status) => {
    setFilterStatus(!filterStatus);
    if (!filterStatus) {
      statusHandler(status);
      setFilterStatus(!filterStatus);
    } else {
      statusHandler('');
    }
  };

  const handleShortlist = (character) => {
    console.log(`idheart = `, character);
    setShortlist([...shortlist, character]);
  };

  const shortListemItems = shortlist.map((card) => {
    return (
      <div className='shortlist_item' key={card}>
        <p>{card.name}</p>
      </div>
    );
  });

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
      {results?.map((character) => {
        const { gender, image, species, status, id, name } = character;
        return (
          <div className='character_card' key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>ß
            <div className='topIcons'>
              <FaRegHeart onClick={() => handleShortlist(character)} />
              <p
                onClick={() => handleStatusClick(status)}
                className={`${statusClassName(status)} status`}
              >
                {status}
              </p>
            </div>
            <p>{species}</p>
            <p>{gender}</p>
          </div>
        );
      })}
      {shortListemItems}
    </>
  );
};

export default CharacterCard;
