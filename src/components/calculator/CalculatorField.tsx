import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: '100%',   
  background: ${(props) => props.theme.fieldDisplay};
`;

const StyledInput = styled.input`
  display: block;
  text-align: right;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0 15px 0 15px;
  border-radius: 4px;
  font-size: 24px;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.fieldDisplay};
`;

const LastValue = styled.div`
  text-align: right;
  padding: 5px;
  border-radius: 4px;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

interface Props {
  value: string;
  lastValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalculatorField: FC<Props> = ({ ...props }) => {
  return (
    <WrapperInput>
      {props.lastValue && <LastValue>{props.lastValue}</LastValue>}
      <StyledInput value={props.value} onChange={(e) => props.handleInputChange(e)} />
    </WrapperInput>
  );
};

export default CalculatorField;
