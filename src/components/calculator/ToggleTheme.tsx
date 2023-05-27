import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hook';
import { changeTheme } from '../../store/themeSlice';

const ToggleWrapper = styled.div`
  background: ${(props) => props.theme.fieldDisplay};
  width: 40%;
  height: 3vh;
  margin: 3px;
  padding: 1px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleItem = styled.div<ToggleProps>`
  background: ${(props) => props.theme.buttonTheme};
  width: 30%;
  height: 70%;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(props) => props.offset}%);
`;

interface ToggleProps {
  offset: number;
}

const Toggletheme = () => {
  const dispatch = useAppDispatch();
  const clicks = Number(localStorage.getItem('toggleItem'));

  const handleToggle = () => {
    const incrementClick = clicks + 1;
    localStorage.setItem('toggleItem', String(incrementClick));
  };

  const newOffset = (clicks % 3) * 110;
  return (
    <>
      <ToggleWrapper onClick={() => [dispatch(changeTheme('')), handleToggle()]}>
        <ToggleItem offset={newOffset + 1} />
      </ToggleWrapper>
    </>
  );
};

export default Toggletheme;
