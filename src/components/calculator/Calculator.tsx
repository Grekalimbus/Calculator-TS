import React from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 30%;
  height: 70vh;
  border: 1px solid white;
  @media (max-width: 425px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 999px) {
    width: 50%;
  }
`;

const Calculator = () => {
  return <CalculatorWrapper>Calc</CalculatorWrapper>;
};

export default Calculator;
