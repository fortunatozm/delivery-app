import React from 'react';
import { useParams } from 'react-router-dom';
import useApiGet from '../hooks/useApiGet';
import formatDate from '../utils/formatDate';

function DetailTop() {
  const { id } = useParams();
  const { data: dataOrder, isFetching: isFetchingOrder } = useApiGet('orders', id);
  const { data, isFetching } = useApiGet('seller');

  if (!isFetching && !isFetchingOrder) {
    const { sellerId, saleDate, status, id: idOrders } = dataOrder[0];
    const sellerData = data.find((seller) => seller.id === sellerId);
    const date = formatDate(saleDate);
    return (
      <div id="dados-pedidos">
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`Pedido ${idOrders}`}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${sellerData.name}`}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {date}
        </span>
        <span
          data-testid={ 'customer_order_details__element-order-details'
            + `-label-delivery-status
        ${id}` }
        >
          {status}
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
    );
  }
  return (
    <div>
      Carregando...
    </div>
  );
}

export default DetailTop;
