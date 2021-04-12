import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  margin: 20px 20px;
  padding: 20px 10px;
  height: 40px;
  outline: none;
`;

const SearchComponent = ({ fetchData }) => (
  <SearchInput
    placeholder="Busque por um usuário"
    type="search"
    onKeyUp={fetchData}
  />
);

SearchComponent.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default SearchComponent;
