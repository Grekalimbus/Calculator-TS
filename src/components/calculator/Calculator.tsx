import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import CalculatorButton from './CalculatorButton';
import CalculatorField from './CalculatorField';
import utilsOperationForOperator from '../../utils/operationForOperator';
import utilsDeleteValue from '../../utils/deleteValue';
import utilsResultValue from '../../utils/resultValue';
import utilsInputChangeForButton from '../../utils/InputChangeForButton';
import utilsHandleInputChange from '../../utils/handleInputChange';

const CalculatorWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  margin: auto;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.color};
  @media (max-width: 1250px) {
    width: 40%;
  }
  @media (max-width: 999px) {
    width: 45%;
  }
  @media (max-width: 825px) {
    width: 55%;
  }
  @media (max-width: 545px) {
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
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  background: ${(props) => props.theme.backgroundUnderButtons};
  @media (max-width: 825px) {
    padding: 10px;
  }
`;

const LineButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>('0');
  const [lastValue, setLastValue] = useState<string>('');
  const lineButtons = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', 'x'],
    ['RESET', '='],
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    utilsHandleInputChange(e, setInputValue);
  };

  const handleInputChangeForButton = (value: string) => {
    utilsInputChangeForButton(inputValue, value, setInputValue);
  };

  const resultValue = () => {
    utilsResultValue(inputValue, lastValue, setLastValue, setInputValue);
  };

  const resetValue = () => {
    setInputValue('0');
    setLastValue('');
  };

  const deleteValue = () => {
    utilsDeleteValue(inputValue, setInputValue);
  };

  const operationForOperator = (value: string) => {
    utilsOperationForOperator(value, lastValue, inputValue, setLastValue, setInputValue);
  };

  return (
    <CalculatorWrapper>
      <Header />
      <CalculatorField
        value={inputValue}
        handleInputChange={handleInputChange}
        lastValue={lastValue}
      />
      <WrapperButtons>
        {lineButtons.map((line, index) => (
          <LineButtons key={index}>
            {line.map((button) => (
              <CalculatorButton
                key={button}
                value={button}
                handleInputChangeForButton={handleInputChangeForButton}
                resetValue={resetValue}
                deleteValue={deleteValue}
                operationForOperator={operationForOperator}
                resultValue={resultValue}
              />
            ))}
          </LineButtons>
        ))}
      </WrapperButtons>
    </CalculatorWrapper>
  );
};

export default Calculator;
