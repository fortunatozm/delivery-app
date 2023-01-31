import React, { useEffect, useState } from 'react';
import useApiGet from '../hooks/useApiGet';
import Navbar from './Navbar';
// import { salesByUserId } from '../services/otherService';
// import requests from '../services/requests';

function ClienteMeusPedidos() {
  const { data, isFetching } = useApiGet('pedidos');
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    if (!isFetching) {
      setPedidos(data);
    }
  }, [data, isFetching]);

  return (
    <div>
      <Navbar />

      {pedidos.map(({ id, status, saleDate, totalPrice }) => (
        <div key={ id }>
          <span data-testid={ `customer_orders__element-order-id-${id}` }>
            Pedido
            {' '}
            {id}
          </span>
          <span data-testid={ `customer_orders__element-delivery-status-${id}` }>
            {status}
          </span>
          <span data-testid={ `customer_orders__element-order-date-${id}` }>
            {saleDate}
          </span>
          <span data-testid={ `customer_orders__element-card-price-${id}` }>
            {totalPrice}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ClienteMeusPedidos;
