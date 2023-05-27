import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Button = styled.button`
  display: block;
  height: 40px;
  margin: 10px;
  font-size: 18px;
  border-radius: 4px;
  color: ${(props) => props.theme.buttonNumber.color};
`;

const CalculatorButton: FC<{ value: string }> = ({ value }) => {
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

  return <Button style={pickThemeColorButton(value)}>{value}</Button>;
};

export default CalculatorButton;
