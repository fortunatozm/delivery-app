import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Registers from './components/Register';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ Login } />
      <Route exact path="/register" component={ Registers } />
    </Switch>
  );
}

export default App;
