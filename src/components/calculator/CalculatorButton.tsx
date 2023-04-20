import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100%;
  height: 100%;
`;

const CalculatorButton: FC<{ value: string }> = ({ value }) => {
  const theme = useTheme();
  const pickThemeColorButton = (value: string) => {
    if (['DEL', '=', 'RESET'].includes(value)) {
      return theme.purple.buttonSide.main;
    }
    return theme.purple.buttonNumber.main;
  };
  console.log(theme.purple);

  return <Button style={{ background: `${pickThemeColorButton(value)}` }}>000</Button>;
};

export default CalculatorButton;
