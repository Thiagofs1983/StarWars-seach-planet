import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    column,
    comparison,
    value,
    handleChangeFilter,
    handleClickFilter,
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
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
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
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
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
    </div>
  );
}

export default Filter;
