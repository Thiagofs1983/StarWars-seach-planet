import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import MyContext from '../context/MyContext';
import { HeaderS, Title, Input, Paragraph, ButtonTrash } from '../Style';
/* import '../App.css'; */

function Header() {
  const {
    filterByName,
    handleChange,
    listFilter,
    handleClickRemoveFilter,
  } = useContext(MyContext);

  return (
    <HeaderS>
      <Title>Projeto Star Wars - Trybe</Title>
      <Input
        type="text"
        value={ filterByName }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      {
        listFilter.map((filter) => (
          <Paragraph
            key={ filter.column }
            data-testid="filter"
          >
            { `${filter.column} ${filter.comparison} ${filter.value}` }
            <ButtonTrash
              type="button"
              className="trash"
              onClick={ () => handleClickRemoveFilter(filter) }
            >
              <FaTrashAlt />
            </ButtonTrash>

          </Paragraph>
        ))
      }
    </HeaderS>
  );
}

export default Header;
