import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik Wet Paint', cursive;
}
`;

const theme = {
  purple: {
    color: '#FBE23E',
    background: '#17062A',
    field: '#1E0836',
    buttonNumber: {
      main: '#331B4D',
      border: '#9409B7',
    },
    buttonSide: {
      main: '#56077C',
      border: '#9409B7',
    },
    buttonResult: {
      main: '#01AF90',
      border: '#04DDB6',
    },
    buttonTheme: '#01AF90',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
