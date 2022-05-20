import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import moment from 'moment';

const CharacterCard = ({ results, statusHandler, showShortlist }) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [shortlist, setShortlist] = useState([]);
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://mocki.io/v1/db57aad0-ee33-4612-8f2a-27c908b81462'
      );
      console.log(`response = `, response);
      const importedData = await response.json();
      console.log(`importedData = `, importedData);
      setPolicy(importedData);
    };
    fetchData();
  });

  useEffect(() => {
    const localShortlist = JSON.parse(localStorage.getItem('shortlist'));
    if (localShortlist) {
      setShortlist(localShortlist);
    }
  }, []);

  const checkCharacterOnLocalStorage = (id) => {
    if (!shortlist) return;

    return shortlist.find((character) => character.id === id);
  };

  const handleStatusClick = (status) => {
    setFilterStatus(!filterStatus);
    if (!filterStatus) {
      statusHandler(status);
      setFilterStatus(!filterStatus);
    } else {
      statusHandler('');
    }
  };

  const saveToLocalStorage = (character) => {
    localStorage.setItem('shortlist', JSON.stringify(character));
    setShortlist(character);
  };

  const handleShortlist = (character) => {
    if (!checkCharacterOnLocalStorage(character.id)) {
      const shortlistLocalStorage = [...shortlist, character];
      saveToLocalStorage(shortlistLocalStorage);
      localStorage.setItem('shortlist', JSON.stringify(shortlistLocalStorage));
      return setShortlist(shortlistLocalStorage);
    }
    const shortlistLocalStorage = shortlist.filter(
      (characterLocal) => characterLocal.id !== character.id
    );
    localStorage.setItem('shortlist', JSON.stringify(shortlistLocalStorage));
    setShortlist(shortlistLocalStorage);
  };

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
      {(showShortlist ? shortlist : results)?.map((character) => {
        const {
          gender,
          image,
          species,
          status,
          id,
          name,
          created,
          location,
          episode,
        } = character;
        return (
          <div className='character_card' key={id}>
            <div className='character_card_image'>
              <img src={image} alt={name} />
            </div>
            <h4>{name}</h4>
            <div className='topIcons'>
              {checkCharacterOnLocalStorage(id) ? (
                <FaHeart
                  className='shortlist_icon'
                  onClick={() => handleShortlist(character)}
                />
              ) : (
                <FaRegHeart
                  className='shortlist_icon'
                  onClick={() => handleShortlist(character)}
                />
              )}
              <p
                onClick={() => handleStatusClick(status)}
                className={`${statusClassName(status)} status`}
              >
                {status}
              </p>
            </div>
            <div className='card-info'>
              <div className='split'>
                <div>Species:</div>
                <div>{species}</div>
              </div>
              <p>Gender: {gender}</p>
              <p>Location: {location.name}</p>
              <p>Episodes: {episode.length}</p>{' '}
              <p>Created: {moment(created).format('DD/MM/YYYY')}</p>
            </div>
          </div>
        );
      })}
      <div>
        <div>
          name: {policy.name}
          description: {policy.description}
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
