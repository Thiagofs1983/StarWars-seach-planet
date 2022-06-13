import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import {
  FilterS,
  FilterNumeric,
  Select,
  InputFilter,
  Label,
  Button,
  Radio,
} from '../Style';

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
    <FilterS>
      <FilterNumeric>
        <Label htmlFor="column">
          Coluna
          <Select
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
          </Select>
        </Label>
        <Label htmlFor="comparison">
          Operador
          <Select
            name="comparison"
            id="comparison"
            value={ filterByNumericValues.comparison }
            onChange={ handleChangeFilter }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </Select>
        </Label>
        <InputFilter
          type="number"
          name="value"
          value={ filterByNumericValues.value }
          onChange={ handleChangeFilter }
          data-testid="value-filter"
        />
        <Button
          type="button"
          onClick={ handleClickFilter }
          data-testid="button-filter"
        >
          Filtrar
        </Button>
      </FilterNumeric>
      <FilterNumeric>
        <Label htmlFor="column">
          Ordenar
          <Select
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
          </Select>
        </Label>
        <Radio>
          <Label htmlFor="ASC">
            <input
              type="radio"
              name="sort"
              value="ASC"
              id="ASC"
              data-testid="column-sort-input-asc"
              onClick={ handleClickRadio }
            />
            Ascendente
          </Label>
          <Label htmlFor="DESC">
            <input
              type="radio"
              name="sort"
              value="DESC"
              id="DESC"
              data-testid="column-sort-input-desc"
              onClick={ handleClickRadio }
            />
            Descendente
          </Label>
        </Radio>
        <Button
          type="button"
          onClick={ handleClickSort }
          data-testid="column-sort-button"
        >
          ORDENAR
        </Button>
        <Button
          type="button"
          onClick={ removeAllFilters }
          data-testid="button-remove-filters"
        >
          REMOVER FILTROS
        </Button>
      </FilterNumeric>
    </FilterS>
  );
}

export default Filter;
