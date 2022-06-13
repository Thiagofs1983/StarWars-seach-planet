import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [dataFilter, setDataFilter] = useState([]);
  const [optionColunm, setOptionColunm] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: optionColunm[0],
    comparison: 'maior que',
    value: 0,
  });
  const [listFilter, setListFilter] = useState([]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetch(endpoint);
        const { results } = await response.json();
        setData(results);
        setDataFilter(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const searchPlanet = data.filter((planet) => planet.name
      .toLowerCase().includes(filterByName));
    setDataFilter(searchPlanet);
  }, [filterByName]);

  const handleChange = ({ target: { value } }) => {
    setFilterByName(value.toLowerCase());
  };

  const handleChangeFilter = ({ target: { value, name } }) => {
    setFilterByNumericValues({
      ...filterByNumericValues,
      [name]: value,
    });
  };

  const handleClickFilter = () => {
    const { column, value, comparison } = filterByNumericValues;
    const filterClick = dataFilter.filter((planet) => {
      let filter;
      if (comparison === 'maior que') {
        filter = Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        filter = Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        filter = Number(planet[column]) === Number(value);
      }
      return filter;
    });
    setDataFilter(filterClick);
    const newArrOpt = optionColunm.filter((option) => option !== column);
    setOptionColunm(newArrOpt);
    setListFilter([...listFilter, { column, comparison, value }]);
    setFilterByNumericValues({
      column: newArrOpt[0],
      comparison: 'maior que',
      value: 0,
    });
  };

  const handleClickRemoveFilter = (filter) => {
    const remove = listFilter.filter((item) => item.column !== filter.column);
    setListFilter(remove);
    setOptionColunm([...optionColunm, filter.column]);
    setDataFilter(data);
  };

  useEffect(() => {
    listFilter.forEach((filter) => {
      const dataFilters = dataFilter.filter((planet) => {
        let filters;
        if (filter.comparison === 'maior que') {
          filters = Number(planet[filter.column]) > Number(filter.value);
        }
        if (filter.comparison === 'menor que') {
          filters = Number(planet[filter.column]) < Number(filter.value);
        }
        if (filter.comparison === 'igual a') {
          filters = Number(planet[filter.column]) === Number(filter.value);
        }
        return filters;
      });
      setDataFilter(dataFilters);
    });
    if (listFilter.length === 0) {
      setDataFilter(data);
    }
  }, [listFilter]);

  const removeAllFilters = () => {
    setOptionColunm([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
    setDataFilter(data);
    setListFilter([]);
  };

  const handleChangeSort = ({ target: { value } }) => {
    setOrder({
      ...order,
      column: value,
    });
  };

  const handleClickRadio = ({ target: { value } }) => {
    setOrder(() => ({
      ...order,
      sort: value,
    }));
  };

  const handleClickSort = () => {
    const { sort, column } = order;
    console.log(sort, column);
    const orderColumn = dataFilter.sort((a, b) => {
      let sortCondition;
      if (order.sort === 'ASC') {
        sortCondition = a[column] - b[column];
      }
      if (sort === 'DESC') {
        sortCondition = b[column] - a[column];
      }
      return sortCondition;
    });
    console.log(orderColumn);
    setDataFilter(orderColumn);
  };

  const context = {
    dataFilter,
    filterByName,
    handleChange,
    filterByNumericValues,
    handleChangeFilter,
    handleClickFilter,
    optionColunm,
    listFilter,
    handleClickRemoveFilter,
    removeAllFilters,
    order,
    handleChangeSort,
    handleClickRadio,
    handleClickSort,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
