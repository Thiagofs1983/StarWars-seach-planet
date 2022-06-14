import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { TableS, Thead, Tbody, Tr } from '../Style';

function Table() {
  const { dataFilter } = useContext(MyContext);
  const headers = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];
  return (
    <TableS>
      <thead>
        <tr>
          {
            headers.map((header) => (
              <Thead key={ header }>
                { header }
              </Thead>
            ))
          }
        </tr>
      </thead>
      <tbody>
        { dataFilter.map((planet) => (
          <Tr key={ planet.name }>
            <Tbody data-testid="planet-name">{planet.name}</Tbody>
            <Tbody>{planet.rotation_period}</Tbody>
            <Tbody>{planet.orbital_period}</Tbody>
            <Tbody>{planet.diameter}</Tbody>
            <Tbody>{planet.climate}</Tbody>
            <Tbody>{planet.gravity}</Tbody>
            <Tbody>{planet.terrain}</Tbody>
            <Tbody>{planet.surface_water}</Tbody>
            <Tbody>{planet.population}</Tbody>
            <Tbody><a href={ planet.films }>{planet.films}</a></Tbody>
            <Tbody>{planet.created}</Tbody>
            <Tbody>{planet.edited}</Tbody>
            <Tbody><a href={ planet.url }>{planet.url}</a></Tbody>
          </Tr>
        )) }
      </tbody>
    </TableS>
  );
}

export default Table;
