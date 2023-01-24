import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Registers from './components/Register';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ Login } />
      <Route exact path="/register" component={ Registers } />
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
