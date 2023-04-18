import React from 'react';
import styled from 'styled-components';
import Toggletheme from './ToggleTheme';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 8vh;
  border: 1px solid white;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Calc</h1>      
      <Toggletheme offset={1} />
    </HeaderWrapper>
  );
};

export default Header;
