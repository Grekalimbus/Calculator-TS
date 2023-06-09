import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Button = styled.button`
  display: block;
  height: 50px;
  margin: 10px;
  font-size: 18px;
  border-radius: 4px;
  color: ${(props) => props.theme.buttonNumber.color};
`;

interface Props {
  handleInputChangeForButton: (value: string) => void;
  resetValue: () => void;
  deleteValue: () => void;
  resultValue: () => void;
  operationForOperator: (value: string) => void;
  value: string;
}

const CalculatorButton: FC<Props> = ({
  value,
  handleInputChangeForButton,
  resetValue,
  deleteValue,
  operationForOperator,
  resultValue,
}) => {
  const theme = useTheme();
  const pickThemeColorButton = (value: string) => {
    if (['DEL'].includes(value)) {
      return {
        background: theme.buttonSide.background,
        borderBottom: `3px solid ${theme.buttonSide.border}`,
        color: theme.buttonSide.color,
        width: '20%',
      };
    }
    if (['RESET'].includes(value)) {
      return {
        background: theme.buttonSide.background,
        borderBottom: `3px solid ${theme.buttonSide.border}`,
        color: theme.buttonSide.color,
        width: '46%',
      };
    }
    if (['='].includes(value)) {
      return {
        background: theme.buttonResult.background,
        borderBottom: `3px solid ${theme.buttonResult.border}`,
        color: theme.buttonResult.color,
        width: '46%',
      };
    }
    return {
      background: theme.buttonNumber.background,
      borderBottom: `3px solid ${theme.buttonNumber.border}`,
      width: '20%',
    };
  };

  if (value === 'DEL') {
    return (
      <Button onClick={() => deleteValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (value === 'RESET') {
    return (
      <Button onClick={() => resetValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (value === '=') {
    return (
      <Button onClick={() => resultValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (['+', '-', 'x', '/'].includes(value)) {
    return (
      <Button onClick={() => operationForOperator(value)} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }

  return (
    <Button onClick={() => handleInputChangeForButton(value)} style={pickThemeColorButton(value)}>
      {value}
    </Button>
  );
};

export default CalculatorButton;
