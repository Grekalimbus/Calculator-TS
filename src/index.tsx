import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle` 
*{
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'Rubik Wet Paint', cursive;
}
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
 :focus,:active{outline: none;}
 a:focus,a:active{outline: none;}
 nav,footer,header,aside{display: block;}
 input::-ms-clear{display: none;}
 button{cursor: pointer;}
 button::-moz-focus-inner {padding:0;border:0;}
 a, a:visited{text-decoration: none;}
 a:hover{text-decoration: none;}
 ul li{list-style: none;}
 img{vertical-align: top;}
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
