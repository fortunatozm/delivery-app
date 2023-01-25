import formatToBRL from '../utils/formatToBRL';

function ProductsTable() {
  const products = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, price, name, quantity }, index) => (
          <tr key={ id }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {id}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {quantity}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {formatToBRL(price)}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {formatToBRL(quantity * price)}
            </td>
            <td>
              <button
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                type="button"
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
