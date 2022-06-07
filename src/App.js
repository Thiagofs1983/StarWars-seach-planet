import React from 'react';
import MyProvider from './context/MyProvider';
import './App.css';

function App() {
  return (
    <MyProvider>
      <span>Hello , App!</span>
    </MyProvider>
  );
}

export default App;
