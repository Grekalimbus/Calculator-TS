import React from 'react';
import styled from 'styled-components';
import Calculator from './components/calculator/Calculator';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5px;
  background: black;
  color: white;
`;

const App = () => {
  return (
    <AppWrapper>
      <Calculator />
    </AppWrapper>
  );
};

export default App;
