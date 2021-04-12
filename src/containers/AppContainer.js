import React, { useState } from 'react';
import AppComponent from '../components/AppComponent';
import api from '../services/api';

const AppContainer = () => {
  const [state, setState] = useState({
    userInfo: null,
    repo: [],
    starred: [],
  });

  const fetchData = async e => {
    if (e.code === `Enter`) {
      await api
        .get(`users/${e.target.value}`)
        .then(({ data }) => {
          setState(s => ({
            ...s,
            userInfo: { ...data },
          }));
        })
        .catch(err => console.log(err.response));
    }
  };

  const getRepos = async e => {
    const { name } = e.target;

    if (name === `repo`) {
      await api
        .get(`users/${state.userInfo.login}/repos`)
        .then(({ data }) => setState(s => ({ ...s, [name]: [...data] })))
        .catch(err => console.log(err));
    }

    if (name === `starred`) {
      await api
        .get(`users/${state.userInfo.login}/starred`)
        .then(({ data }) => setState(s => ({ ...s, [name]: [...data] })))
        .catch(err => console.log(err));
    }
  };

  return (
    <AppComponent
      fetchData={fetchData}
      userInfo={state.userInfo}
      repos={state.repo}
      starred={state.starred}
      getRepos={getRepos}
    />
  );
};

export default AppContainer;
