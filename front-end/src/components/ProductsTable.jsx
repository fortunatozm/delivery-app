import { arrayOf, shape } from 'prop-types';
import formatToBRL from '../utils/formatToBRL';
import resultFixed from '../utils/resultFixed';

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
        {products.map(({ id, price, name, qnt }, index) => (
          <tr key={ id }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              {name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {qnt}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {`${price.replace('.', ',')}`}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {formatToBRL(qnt * price)}
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

ProductsTable.propTypes = {
  products: arrayOf(shape({})).isRequired,
};

export default ProductsTable;
