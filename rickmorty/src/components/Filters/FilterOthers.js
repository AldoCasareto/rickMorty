import React, { useState } from 'react';

const FilterOthers = ({ characters, setFilters }) => {
  const [selected, setSelected] = useState([]);
  console.log(`characters = `, characters);
  // console.log(`characters[0].gender = `, characters?[0].id);

  //   const status = characters?.map(({ status }) => status);
  //   const gender = characters?.map(({ gender }) => gender);
  //   const species = characters?.map(({ species }) => species);
  //   const type = characters?.map(({ type }) => type);
  const genderFilter = [...new Set(characters.map(({ gender }) => gender))];
  const statusFilter = [...new Set(characters.map(({ status }) => status))];
  const speciesFilter = [...new Set(characters?.map(({ species }) => species))];
  const typeFilter = [...new Set(characters?.map(({ type }) => type))];

  console.log(`genderFilter = `, genderFilter);
  console.log(`statusFilter = `, statusFilter);
  console.log(`speciesFilter = `, speciesFilter);
  console.log(`typeFilter = `, typeFilter);

  const handleSelection = (value) => {
    console.log(`value = `, value);
    setFilters(value);
  };

  //   const handleSelection = (id) => {
  //     const selectedItem = [...selected];
  //     const index = selectedItem.indexOf(id);
  //     if (index === -1) {
  //       selectedItem.push(id);
  //     } else {
  //       selectedItem.splice(index, 1);
  //     }
  //     console.log(`SelectedItem = `, selectedItem);
  //     setSelected(selectedItem);
  //   };

  return (
    <div>
      <p>Status</p>
      <ul>
        {statusFilter.map((status, index) => (
          <li key={index}>
            <button onClick={() => handleSelection(status)}>{status}</button>
          </li>
        ))}
      </ul>
      <p>Gender</p>
      <ul>
        {genderFilter.map((gender, index) => (
          <li key={index}>
            <button onClick={() => handleSelection(gender)}>{gender}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOthers;
