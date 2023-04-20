import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperInput = styled.div`
    width: '100%',
    height: 10vh;
    display: flex;
    justify-content:center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 10vh;
  margin: 0;
  border-radius: 4px;
  display: block;
  background: ${(props) => props.theme.purple.field};
`;

interface Props {
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorField: FC<Props> = ({ ...props }) => {
  return (
    <WrapperInput>
      <StyledInput value={props.value} onChange={(e) => props.handleInputChange(e)} />
    </WrapperInput>
  );
};

export default CalculatorField;
