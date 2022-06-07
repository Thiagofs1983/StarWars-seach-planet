import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { filterByName, handleChange } = useContext(MyContext);
  return (
    <>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ filterByName.name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </>
  );
}

export default Header;
