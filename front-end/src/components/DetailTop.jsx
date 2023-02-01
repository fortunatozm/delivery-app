import React from 'react';

function DetailTop() {
  const index = 1;
  const id = 1;
  return (
    <div id="dados-pedidos">
      <div
        data-testid={ `customer_order_details__element-order-details-label-order-
        ${id}` }
      >
        Pedido
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        P. Vend:
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        Data
      </div>
      <div
        data-testid={ 'customer_order_details__element-order-details'
        + `-label-delivery-status
        ${index}` }
      >
        Status
      </div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        Pedido
      </button>
    </div>
  );
}

export default DetailTop;
