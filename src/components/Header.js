import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const {
    filterByName,
    handleChange,
    listFilter,
    handleClickRemoveFilter,
  } = useContext(MyContext);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <input
        type="text"
        value={ filterByName }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      {
        listFilter.map((filter) => (
          <p
            key={ filter.column }
            data-testid="filter"
          >
            { `${filter.column} ${filter.comparison} ${filter.value}` }
            <button
              type="button"
              onClick={ () => handleClickRemoveFilter(filter) }
            >
              X
            </button>
          </p>
        ))
      }
    </div>
  );
}

export default Header;
