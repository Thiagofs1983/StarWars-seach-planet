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
