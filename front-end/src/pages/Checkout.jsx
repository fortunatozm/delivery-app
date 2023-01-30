import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductsTable from '../components/ProductsTable';
import formatToBRL from '../utils/formatToBRL';
import useApiGet from '../hooks/useApiGet';

function Checkout() {
  const { data, isFetching } = useApiGet('seller');
  const [products, setProducts] = useState([]);
  const [removeItem, setRemoveItem] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    const filteredCart = cartItems.filter(({ qnt }) => qnt > 0);
    setProducts(filteredCart);
  }, [removeItem]);

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
          <ProductsTable
            products={ products }
            setRemoveItem={ setRemoveItem }
            removeItem={ removeItem }
          />
          <div>
            <p data-testid="customer_checkout__element-order-total-price">
              {`Total: ${formatToBRL(totalPrice)}`}
            </p>
          </div>
        </section>
        <section>
          <h1>Detalhes e Endereço para Entrega</h1>
          <select data-testid="customer_checkout__select-seller">
            {!isFetching ? data.map((seller) => (
              <option value="" key={ seller.id }>{seller.name}</option>
            )) : null}

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
