import { arrayOf, shape } from 'prop-types';

function ProductsTable({ products }) {
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
        {products.map(({ id, price, name }, index) => (
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
              0
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {price}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              0.00
            </td>
            <button
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              type="button"
            >
              Remover
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propsTypes = {
  products: arrayOf(shape({})).isRequired,
};

export default ProductsTable;
