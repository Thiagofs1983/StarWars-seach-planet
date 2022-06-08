import React from 'react';

function Filter() {
  return (
    <div>
      <label htmlFor="column">
        Coluna
        <select
          name="column"
          id="column"
          data-testid="column-filter"
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="operator">
        Operador
        <select
          name="operator"
          id="operator"
          data-testid="comparison-filter"
        >
          <option value=">">Maior que</option>
          <option value="<">Menor que</option>
          <option value="=">Igual a</option>
        </select>
      </label>
      <input
        type="number"
        name="valueFilter"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
