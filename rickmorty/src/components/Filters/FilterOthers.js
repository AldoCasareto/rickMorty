import React, { useState } from 'react';
// import FilterButton from '../Buttons/FilterButton'

const FilterOthers = ({
  characters,
  genderHandler,
  statusHandler,
  speciesHandler,
  typeHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(`characters = `, characters);
  // console.log(`characters[0].gender = `, characters?[0].id);

  //   const status = characters?.map(({ status }) => status);
  //   const gender = characters?.map(({ gender }) => gender);
  //   const species = characters?.map(({ species }) => species);
  //   const type = characters?.map(({ type }) => type);

  //   const filter = ({ filtered }) => {
  //     return [...new Set(characters.map(({ filtered }) => filtered))];
  //   };

  const genderFilter = [...new Set(characters.map(({ gender }) => gender))];
  const statusFilter = [...new Set(characters.map(({ status }) => status))];
  const speciesFilter = [...new Set(characters.map(({ species }) => species))];
  const typeFilter = [...new Set(characters.map(({ type }) => type))];

  const genderFilter2 = [
    ...new Set(
      characters.map(({ gender, status, species, type }) => {
        return { gender, status, species, type };
      })
    ),
  ];

  console.log(`genderFilter2 = `, genderFilter2);

  return (
    <div>
      {
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? 'Show' : 'Hide'} Filters
        </button>
      }

      {isOpen && (
        <>
          <p>Status</p>
          <ul>
            {statusFilter.map((status, index) => (
              <li key={index}>
                <button onClick={() => statusHandler(status)}>{status}</button>
              </li>
            ))}
          </ul>
          <p>Gender</p>
          <ul>
            {genderFilter.map((gender, index) => (
              <li key={index}>
                <button onClick={() => genderHandler(gender)}>{gender}</button>
              </li>
            ))}
          </ul>
          <p>Types</p>
          <select onChange={typeHandler}>
            <option value=''>All types</option>
            {typeFilter
              .filter((empty) => empty)
              .map((type, index) => (
                <option value={type.value} key={index}>
                  {type}
                </option>
              ))}
          </select>
          <p>Species</p>
          <ul>
            {speciesFilter.map((species, index) => (
              <li key={index}>
                <button onClick={() => speciesHandler(species)}>
                  {species}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default FilterOthers;
