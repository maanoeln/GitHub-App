import React from 'react';
import styled from 'styled-components';
import AppContainer from './containers/AppContainer';
import GlobalStyled from './GlobalStyled';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ComponentsContainer = styled.div`
  width: 50%;
`;

const App = () => (
  <Container>
    <GlobalStyled />
    <ComponentsContainer>
      <AppContainer />
    </ComponentsContainer>
  </Container>
);

export default App;
