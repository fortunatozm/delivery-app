import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Registers from './components/Register';
import Products from './pages/Products';
import ClienteMeusPedidos from './components/ClientePedidos';
import Checkout from './pages/Checkout';
import AdmGerenciamento from './components/AdmGerenciamento';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route path="/login" component={ Login } />
      <Route exact path="/register" component={ Registers } />
      <Route path="/customer/products" component={ Products } />
      <Route exact path="/customer/orders" component={ ClienteMeusPedidos } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/admin/manage" component={ AdmGerenciamento } />
      <Route exact path="/seller/orders" component={ Orders } />
      <Route path="/seller/orders/:id" />
    </Switch>
  );
}

export default App;
