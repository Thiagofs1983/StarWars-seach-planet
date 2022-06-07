import React from 'react';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <MyProvider>
      <Header />
      <Table />
    </MyProvider>
  );
}

export default App;
