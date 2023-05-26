import React from 'react';
import styled from 'styled-components';
import Toggletheme from './ToggleTheme';

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 2%;
  justify-content: space-between;
  align-items: end;
  height: 8vh;
  color: ${(props) => props.theme.color};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Calc</h1>
      <Toggletheme />
    </HeaderWrapper>
  );
};

export default Header;
