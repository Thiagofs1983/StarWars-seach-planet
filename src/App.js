import React from 'react';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import Header from './components/Header';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <MyProvider>
      <Header />
      <Filter />
      <Table />
    </MyProvider>
  );
}

export default App;
