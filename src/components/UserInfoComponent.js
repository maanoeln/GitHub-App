import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  padding: 20px 0;
`;

const UserImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 20px;
  border: 1px solid black;
`;

const UserDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }
`;

const UserInfoComponent = ({ userInfo }) => (
  <UserInfoContainer>
    <UserImg src={userInfo.avatar_url} alt="" />
    <UserDetails>
      <a href={`https://github.com/${userInfo.login}`}>
        <h2>{userInfo.name || ``}</h2>
      </a>
      <span>Repositórios: {userInfo.public_repos}</span>
      <span>Seguidores: {userInfo.followers}</span>
      <span>Seguindo: {userInfo.following}</span>
    </UserDetails>
  </UserInfoContainer>
);

UserInfoComponent.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfoComponent;
