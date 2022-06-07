import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await fetch(endpoint);
        const { results } = await response.json();
        /* console.log(results); */
        setData(results);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setFilterByName({ name: value });
  };

  return (
    <MyContext.Provider value={ { data, filterByName, handleChange } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
