import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeTheme } from '../../store/themeSlice';

const ToggleWrapper = styled.div`
  background: ${(props) => props.theme.fieldDisplay};
  width: 20%;
  height: 3vh;
  margin: 3px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleItem = styled.div<ToggleProps>`
  background: ${(props) => props.theme.buttonTheme};
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

const Toggletheme = () => {
  const dispatch = useAppDispatch();
  const [clicks, setClicks] = useState<number>(0);

  const handleToggle = () => {
    setClicks(clicks + 1);
  };

  const newOffset = (clicks % 3) * 90;
  return (
    <>
      <ToggleWrapper onClick={() => [dispatch(changeTheme('')), handleToggle()]}>
        <ToggleItem offset={newOffset + 1} />
      </ToggleWrapper>
    </>
  );
};

export default Toggletheme;
