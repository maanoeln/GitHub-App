import { PropTypes } from 'prop-types';
import React from 'react';
import RepoButtonsComponents from './RepoButtonsComponent';
import ReposComponent from './ReposComponent';
import SearchComponent from './SearchComponent';
import UserInfoComponent from './UserInfoComponent';

const AppComponent = ({ userInfo, repos, starred, fetchData, getRepos }) => (
  <>
    <SearchComponent fetchData={fetchData} />
    {!!userInfo && <UserInfoComponent userInfo={userInfo} />}
    {!!userInfo && <RepoButtonsComponents getRepos={getRepos} />}
    {!!repos.length && <ReposComponent name="Repositórios" repos={repos} />}
    {!!starred.length && <ReposComponent name="Favoritos" repos={starred} />}
  </>
);

AppComponent.defaultProps = {
  userInfo: null,
};

AppComponent.propTypes = {
  fetchData: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  starred: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userInfo: PropTypes.shape({}),
  getRepos: PropTypes.func.isRequired,
};

export default AppComponent;
