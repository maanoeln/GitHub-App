import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const RepoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ReposComponent = ({ name, repos }) => (
  <RepoContainer>
    <h2>{name}</h2>
  </RepoContainer>
);

ReposComponent.propTypes = {
  name: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ReposComponent;
