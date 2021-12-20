import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { theme } from "./utils";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
    box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;   
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 20px;
    font-family: ${theme.primaryFont};
    background-color: ${theme.neutralBackground};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

