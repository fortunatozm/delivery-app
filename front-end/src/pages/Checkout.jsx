import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductsTable from '../components/ProductsTable';
import formatToBRL from '../utils/formatToBRL';

function Checkout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    setProducts(cartItems.filter(({ qnt }) => qnt > 0));
  }, []);

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.qnt * curr.price,
    0,
  );

  return (
    <div>
      <Navbar />
      <div>
        <section>
          <h1>Finalizar pedido</h1>
          <ProductsTable products={ products } />
          <div>
            <p data-testid="customer_checkout__element-order-total-price">
              {`Total: ${formatToBRL(totalPrice)}`}
            </p>
          </div>
        </section>
        <section>
          <h1>Detalhes e Endereço para Entrega</h1>
          <select data-testid="customer_checkout__select-seller">
            <option value="">vendedores</option>
          </select>
          <input
            placeholder="Endereço"
            data-testid="customer_checkout__input-address"
            type="text"
          />
          <input
            placeholder="Número"
            data-testid="customer_checkout__input-address-number"
            type="number"
          />
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
          >
            Finalizar Pedido
          </button>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
