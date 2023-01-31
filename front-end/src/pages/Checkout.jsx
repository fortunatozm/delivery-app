import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductsTable from '../components/ProductsTable';
import formatToBRL from '../utils/formatToBRL';
import useApiGet from '../hooks/useApiGet';
import postSales from '../services/postSales';

function Checkout() {
  const { data, isFetching } = useApiGet('seller');
  const [formData, setFormData] = useState({ });
  const [products, setProducts] = useState([]);
  const [removeItem, setRemoveItem] = useState(false);

  const history = useHistory();

  const totalPrice = products.reduce(
    (acc, curr) => acc + curr.qnt * curr.price,
    0,
  );
  const finishOrder = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const { id } = await postSales({
      userId: user.id,
      ...formData,
      sellerId: formData.sellerId ? formData.sellerId : data[0].id,
      totalPrice,
      products: products
        .map((product) => ({ productId: product.id, quantity: product.qnt })),
      status: 'Pendente',
    });

    console.log(id);
    history.push(`/customer/orders/${id}`);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));

    const filteredCart = cartItems.filter(({ qnt }) => qnt > 0);
    setProducts(filteredCart);
  }, [removeItem]);

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
        <form onSubmit={ finishOrder }>
          <h1>Detalhes e Endereço para Entrega</h1>
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ handleChange }
            name="sellerId"
          >
            {!isFetching ? data.map((seller) => (
              <option
                value={ seller.id }
                key={ seller.id }
              >
                {seller.name}

              </option>
            )) : null}

          </select>
          <input
            placeholder="Endereço"
            name="deliveryAddress"
            data-testid="customer_checkout__input-address"
            type="text"
            onChange={ handleChange }
          />
          <input
            placeholder="Número"
            name="deliveryNumber"
            data-testid="customer_checkout__input-address-number"
            type="number"
            onChange={ handleChange }
          />
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
          >
            Finalizar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
