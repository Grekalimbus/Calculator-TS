import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hook';
import { changeTheme } from '../../store/themeSlice';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  height: 3.5vh;
  margin: 3px;
  padding-left: 8px;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => props.theme.fieldDisplay};
`;

const ToggleItem = styled.div<ToggleProps>`
  width: 30%;
  height: 70%;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;
  background: ${(props) => props.theme.buttonTheme};
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
    console.log((clicks % 3) * 110);
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
