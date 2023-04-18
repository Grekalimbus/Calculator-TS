import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const CalculatorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 30%;
  height: 70vh;
  border: 1px solid white;
  color: ${(props) => props.theme.purple.color};
  @media (max-width: 1250px) {
    width: 45%;
  }
  @media (max-width: 999px) {
    width: 65%;
  }
  @media (max-width: 825px) {
    width: 70%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Header />
    </CalculatorWrapper>
  );
};

export default Calculator;
