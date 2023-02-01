import React from 'react';
import { useParams } from 'react-router-dom';
import useApiGet from '../hooks/useApiGet';

function DetailList() {
  const { id } = useParams();
  const { data, isFetching } = useApiGet('orders', id);

  // useEffect(() => {
  //   // if (!isFetching) {
  //   //   const
  //   // } else {
  //   console.log(data);
  //   // }
  // }, [isFetching]);
  // const items = [{ index: 1, name: 'stella', quantity: 2, price: 2.99 }];
  return (
    <table>
      <tr>
        <th>
          Item
        </th>
        <th>
          Descrição
        </th>
        <th>
          Quantidade
        </th>
        <th>
          Valor Unitário
        </th>
        <th>
          Sub-Total
        </th>
      </tr>
      { !isFetching && data.map((item, index) => (
        <tr key={ item.id }>
          <th
            data-testid={ `customer_order_details__element-order-table-item-number-
            ${index}` }
          >
            {index + 1}
          </th>
          <th
            data-testid={ `customer_order_details__element-order-table-name-${index}` }
          >
            {item.products[index].name}
          </th>
          <th
            data-testid={ `customer_order_details__element-order-table-quantity-
            ${index}` }
          >
            {item.products[index].SaleProduct.quantity}
          </th>
          <th
            data-testid={ `customer_order_details__element-order-table-unit-price-
            ${index}` }
          >
            {`${item.products[index].price}`.replace('.', ',')}
          </th>
          <th
            data-testid={ `customer_order_details__element-order-table-sub-total-
            ${index}` }
          >
            {`${item.totalPrice}`.replace('.', ',')}
          </th>
        </tr>
      )) }
    </table>
  );
}

export default DetailList;
