import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filterByName } = useContext(MyContext);
  const dataFilter = data.length > 0
    ? data.filter((planet) => planet.name.includes(filterByName.name))
    : data;
  console.log(dataFilter);
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
    <table>
      <tbody>
        <tr>
          {
            headers.map((header) => (
              <th key={ header }>
                { header }
              </th>
            ))
          }
        </tr>
        { dataFilter.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
