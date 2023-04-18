import React, { FC, useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  background: ${(props) => props.theme.purple.field};
  width: 20%;
  height: 3vh;
  margin: 3px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleItem = styled.div<ToggleProps>`
  background: ${(props) => props.theme.purple.buttonTheme};
  width: 31.5%;
  height: 70%;
  margin: 5px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(props) => props.offset}%);
`;

interface ToggleProps {
  offset: number;
}

const Toggletheme: FC<ToggleProps> = ({ offset }) => {
  const [clicks, setClicks] = useState(0);
  const handleToggle = () => {
    setClicks(clicks + 1);
  };
  const newOffset = (clicks % 3) * 90;
  return (
    <>
      <ToggleWrapper onClick={handleToggle}>
        <ToggleItem offset={newOffset + offset} />
      </ToggleWrapper>
    </>
  );
};

export default Toggletheme;
