import { arrayOf, shape, func, bool } from 'prop-types';
import formatToBRL from '../utils/formatToBRL';

function ProductsTable({ products, setRemoveItem, removeItem }) {
  const removeItemFromCart = (id) => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    const updatedProduct = cartItems.find((product) => product.id === id);
    updatedProduct.qnt = 0;

    localStorage.setItem('cart', JSON.stringify(cartItems));
    setRemoveItem(!removeItem);
  };

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
                onClick={ () => removeItemFromCart(id) }
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
  setRemoveItem: func.isRequired,
  removeItem: bool.isRequired,
};

export default ProductsTable;
