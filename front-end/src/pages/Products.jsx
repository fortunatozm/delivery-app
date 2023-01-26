import { useState } from 'react';
import Navbar from '../components/Navbar';
import useApiGet from '../hooks/useApiGet';
import ProductCard from '../components/ProductCard';
import useLoginValidator from '../hooks/useLoginValidator';
// import handleTotal from '../utils/total';

function Products() {
  const { data, errorStatus, isFetching } = useApiGet('products');
  useLoginValidator(errorStatus);

  const [result, setResult] = useState(0);

  const handleLocalStorage = () => {
    if (!isFetching) {
      const arr = data.map(({ id, name, price }) => (
        { id, name, price, qnt: 0, subTotal: 0 }
      ));

      localStorage.setItem('cart', JSON.stringify(arr));
    }
  };

  const totalResult = (r) => {
    setResult(r);
  };

  return (
    <div>
      <Navbar />
      {!isFetching ? handleLocalStorage() : null}
      {!isFetching && (
        <section>
          {data.map(({ id, urlImage, name, price }) => (

            <ProductCard
              key={ id }
              id={ id }
              urlImage={ urlImage }
              name={ name }
              price={ price }
              handleResult={ totalResult }
            />
          ))}
        </section>
      )}
      <button
        data-testid="customer_products__button-cart"
        type="button"
      >
        {' '}
        Ver Carrinho:
        {' '}
        <p data-testid="customer_products__checkout-bottom-value">
          {result}
        </p>
        {' '}

      </button>
    </div>
  );
}

export default Products;
