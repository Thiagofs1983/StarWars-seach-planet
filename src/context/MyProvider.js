import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  return (
    <MyContext.Provider>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
