import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 20%;
  height: 40px;
  margin: 10px;
  border-radius: 4px;
  border-bottom: 3px solid ${(props) => props.theme.buttonNumber.border};
  color: ${(props) => props.theme.buttonNumber.color};
`;

const CalculatorButton: FC<{ value: string }> = ({ value }) => {
  const theme = useTheme();
  const pickThemeColorButton = (value: string) => {
    if (['DEL', '=', 'RESET'].includes(value)) {
      return theme.buttonSide.background;
    }
    return theme.buttonNumber.background;
  };

  return <Button style={{ background: `${pickThemeColorButton(value)}` }}>{value}</Button>;
};

export default CalculatorButton;
