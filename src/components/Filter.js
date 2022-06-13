import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    filterByNumericValues,
    handleChangeFilter,
    handleClickFilter,
    optionColunm,
    removeAllFilters,
    handleChangeSort,
    order,
    handleClickRadio,
    handleClickSort,
  } = useContext(MyContext);
  return (
    <div>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="column"
          value={ filterByNumericValues.column }
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
          value={ filterByNumericValues.comparison }
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
        value={ filterByNumericValues.value }
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
      <label htmlFor="column">
        Ordenar
        <select
          name="column"
          id="column"
          value={ order.column }
          onChange={ handleChangeSort }
          data-testid="column-sort"
        >
          {
            optionColunm.map((option) => (
              <option key={ option }>{option}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="ASC">
        <input
          type="radio"
          name="sort"
          value="ASC"
          id="ASC"
          data-testid="column-sort-input-asc"
          onClick={ handleClickRadio }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          name="sort"
          value="DESC"
          id="DESC"
          data-testid="column-sort-input-desc"
          onClick={ handleClickRadio }
        />
        Descendente
      </label>
      <button
        type="button"
        onClick={ handleClickSort }
        data-testid="column-sort-button"
      >
        ORDENAR
      </button>
    </div>
  );
}

export default Filter;
