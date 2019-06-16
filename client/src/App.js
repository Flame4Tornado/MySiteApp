import React from 'react';
import logo from './logo.svg';
import Customers from './components/customers/customers'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Customers/>
        
        
        </header>
    </div>
  );
}

export default App;
