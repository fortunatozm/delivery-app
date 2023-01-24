import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import Registers from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
      <Route exact path="/register" component={ Registers } />
    </BrowserRouter>
  );
}

export default App;
