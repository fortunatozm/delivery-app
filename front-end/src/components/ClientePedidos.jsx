import React, { useEffect, useState } from 'react';
// import { salesByUserId } from '../services/otherService';
import requests from '../services/requests';

function ClienteMeusPedidos() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    const dadosSales = async () => {
      const data = await requests.get.pedidos();
      console.log(data);
      setPedidos(data);
    };
    dadosSales();
  }, []);

  if (pedidos.length > 0) {
    pedidos.map((pedido) => (
      <div key={ pedido.id }>
        chegou aqui
        <span data-testid={ `customer_orders__element-order-id-${pedido.id}` }>
          Pedido
        </span>
        <span data-testid={ `customer_orders__element-delivery-status-${pedido.id}` }>
          Status
        </span>
        <span data-testid={ `customer_products__element-order-date-${pedido.id}` }>
          Data
        </span>
        <span data-testid={ `customer_orders__element-card-price-${pedido.id}` }>
          Preço
        </span>
      </div>
    ));
  }
  return (
    <div>
      <p>
        O cliente não fez nenhum pedido
      </p>
    </div>
  );
}

export default ClienteMeusPedidos;
