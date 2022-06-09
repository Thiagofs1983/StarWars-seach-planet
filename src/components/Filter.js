import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    column,
    comparison,
    value,
    handleChangeFilter,
    handleClickFilter,
    optionColunm,
    removeAllFilters,
  } = useContext(MyContext);
  return (
    <div>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="column"
          value={ column }
          onChange={ handleChangeFilter }
          data-testid="column-filter"
        >
          {
            optionColunm.map((option) => (
              <option key={ option }>{ option }</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ handleChangeFilter }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="number"
        name="value"
        value={ value }
        onChange={ handleChangeFilter }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ handleClickFilter }
        data-testid="button-filter"
      >
        Filtrar
      </button>
      <button
        type="button"
        onClick={ removeAllFilters }
        data-testid="button-remove-filters"
      >
        REMOVER FILTROS
      </button>
      <label htmlFor="sort">
        Ordenar
        <select
          name="sort"
          id="sort"
          data-testid="column-sort"
        >
          {
            optionColunm.map((option) => (
              <option key={ option }>{option}</option>
            ))
          }
        </select>
      </label>
    </div>
  );
}

export default Filter;
