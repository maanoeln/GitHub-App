import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 40%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const RepoButtonsComponents = ({ getRepos }) => (
  <ButtonsContainer>
    <Button name="repo" onClick={getRepos}>
      Ver repositórios
    </Button>
    <Button name="starred" onClick={getRepos}>
      Ver favoritos
    </Button>
  </ButtonsContainer>
);

RepoButtonsComponents.propTypes = {
  getRepos: PropTypes.func.isRequired,
};

export default RepoButtonsComponents;
