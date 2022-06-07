import React from 'react';
import MyProvider from './context/MyProvider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
