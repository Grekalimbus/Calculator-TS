import React, { useState } from 'react';
import styled from 'styled-components';
import CalculatorButton from './CalculatorButton';
import CalculatorField from './CalculatorField';
import Header from './Header';

const CalculatorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  width: 30%;
  border: 1px solid white;
  color: ${(props) => props.theme.color};
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

const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  background: ${(props) => props.theme.backgroundUnderButtons};
  border: 1px solid white;
`;

const LineButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const lineButtons = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', 'x'],
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <CalculatorWrapper>
      <Header />
      <CalculatorField value={inputValue} handleInputChange={handleInputChange} />
      <WrapperButtons>
        {lineButtons.map((line, index) => (
          <LineButtons key={index}>
            {line.map((button) => (
              <CalculatorButton key={button} value={button} />
            ))}
          </LineButtons>
        ))}
      </WrapperButtons>
    </CalculatorWrapper>
  );
};

export default Calculator;
