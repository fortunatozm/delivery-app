import React from 'react';
import { useParams } from 'react-router-dom';
import useApiGet from '../hooks/useApiGet';
import formatDate from '../utils/formatDate';

function DetailTop() {
  const { id } = useParams();
  const { data: dataOrder } = useApiGet('orders', id);
  const { data, isFetching } = useApiGet('seller');
  const { sellerId, saleDate, status, id: idOrders } = dataOrder[0];
  const sellerData = data.find((seller) => seller.id === sellerId);
  const date = formatDate(saleDate);
  console.log(sellerData);

  // console.log(dataOrder, isFetchOrders, data, isFetching);
  if (!isFetching) {
    return (
      <div id="dados-pedidos">
        <div
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`Pedido ${idOrders}`}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {`P. Vend: ${sellerData.name}`}
        </div>
        <div
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {date}
        </div>
        <div
          data-testid={ 'customer_order_details__element-order-details'
            + `-label-delivery-status
        ${id}` }
        >
          {status}
        </div>
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
}

export default DetailTop;
