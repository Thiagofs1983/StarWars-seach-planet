import React from 'react';
import { createGlobalStyle } from 'styled-components';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import Header from './components/Header';
import Filter from './components/Filter';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  background-color: rgb(22, 22, 26);
  color: rgb(148, 161, 178);
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;

function App() {
  return (
    <MyProvider>
      <GlobalStyle />
      <Header />
      <Filter />
      <Table />
    </MyProvider>
  );
}

export default App;
