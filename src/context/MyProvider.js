import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState([]);
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

  return (
    <MyContext.Provider value={ { data } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
