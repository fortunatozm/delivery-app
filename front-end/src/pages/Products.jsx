import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useApiGet from '../hooks/useApiGet';
import ProductCard from '../components/ProductCard';
import useLoginValidator from '../hooks/useLoginValidator';
import handleTotal from '../utils/total';

function Products() {
  const { data, errorStatus, isFetching } = useApiGet('products');
  useLoginValidator(errorStatus);
  const history = useHistory();

  const [result, setResult] = useState(0);

  const handleLocalStorage = () => {
    const alreadyExists = localStorage.getItem('cart');

    if (!alreadyExists) {
      const arr = data.map(({ id, name, price }) => (
        { id, name, price, qnt: 0, subTotal: 0 }
      ));
      localStorage.setItem('cart', JSON.stringify(arr));
    }
  };

  useEffect(() => {
    if (!isFetching) {
      handleLocalStorage();
      setResult(handleTotal());
    }
  }, [isFetching]);

  const resultFixed = `${result.toFixed(2)}`.replace('.', ',');
  return (
    <div>
      <Navbar />
      {!isFetching && (
        <section>
          {data.map(({ id, urlImage, name, price }) => (

            <ProductCard
              key={ id }
              id={ id }
              urlImage={ urlImage }
              name={ name }
              price={ price }
              result={ result }
              setResult={ setResult }
              // handleResult={ totalResult }
            />
          ))}
        </section>
      )}
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ !result }
      >
        {' '}
        Ver Carrinho:
        {' '}
        <p data-testid="customer_products__checkout-bottom-value">
          {resultFixed}
        </p>
        {' '}

      </button>
    </div>
  );
}

export default Products;
