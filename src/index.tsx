import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useAppSelector } from './hook';
import { Theme } from './store/themeSlice';

const Global = createGlobalStyle` 
*{
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'Righteous', cursive;
  font-weight: 700;
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

const Root = () => {
  const themes = useAppSelector((state) => state.theme.list);
  const themeFromLS = localStorage.getItem('theme');
  const toggleItem = localStorage.getItem('toggleItem');
  const parseThemeFromLS: Theme | null = themeFromLS ? JSON.parse(themeFromLS) : null;

  useEffect(() => {
    if (!toggleItem) {
      localStorage.setItem('toggleItem', '0');
    }
    if (!parseThemeFromLS) {
      const themeObject = {
        id: '1',
        background: '#17062A',
        fieldDisplay: '#1E0836',
        backgroundUnderButtons: '#1E0836',
        color: '#FBE23E',
        buttonNumber: {
          background: '#331B4D',
          border: '#9409B7',
          color: '#FBE23E',
        },
        buttonSide: {
          background: '#56077C',
          border: '#9409B7',
          color: 'white',
        },
        buttonResult: {
          background: '#01AF90',
          border: '#04DDB6',
          color: 'white',
        },
        buttonTheme: '#01AF90',
      };
      localStorage.setItem('theme', JSON.stringify({ list: themeObject }));
    }
  }, []);

  return (
    themes && (
      <ThemeProvider theme={themes}>
        <Global />
        <App />
      </ThemeProvider>
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
