import React, { useState } from 'react';
import { number, string, func } from 'prop-types';
// import handleTotal from '../utils/total';
// import setStorage from '../storage/localStorage';

function ProductCard({ id, price, urlImage, name, setResult }) {
  const [product, setProduct] = useState(0);

  const setTotal = (prods) => {
    prods = JSON.parse(localStorage.getItem('cart'));
    const newTotal = prods.reduce((acc, curr) => acc + curr.subTotal, 0);
    setResult(newTotal);
  };
  const handleClickAdd = () => {
    setProduct(product + 1);

    let prods = JSON.parse(localStorage.getItem('cart'));
    const clickedProd = prods.find((prod) => prod.id === id);
    clickedProd.qnt = product + 1;
    // console.log(result);
    clickedProd.subTotal = clickedProd.qnt * clickedProd.price;

    const filtered = prods.filter((prod) => prod.id !== id);
    filtered.push(clickedProd);

    localStorage.setItem('cart', JSON.stringify(filtered));
    prods = JSON.parse(localStorage.getItem('cart'));
    setTotal(prods);
  };

  const handleClickRemove = () => {
    setProduct(product - 1);
    if (product <= 0) {
      setProduct(0);
    }

    let prods = JSON.parse(localStorage.getItem('cart'));
    const clickedProd = prods.find((prod) => prod.id === id);
    clickedProd.qnt = product - 1;
    clickedProd.subTotal = clickedProd.qnt * clickedProd.price;

    if (clickedProd.qnt <= 0) {
      clickedProd.qnt = 0;
    }

    const filtered = prods.filter((prod) => prod.id !== id);
    filtered.push(clickedProd);
    localStorage.setItem('cart', JSON.stringify(filtered));
    prods = JSON.parse(localStorage.getItem('cart'));

    setTotal(prods);
  };

  const handleValue = ({ target }) => {
    setProduct(Number(target.value));

    let prods = JSON.parse(localStorage.getItem('cart'));
    const clickedProd = prods.find((prod) => prod.id === id);
    clickedProd.qnt = Number(target.value);
    clickedProd.subTotal = clickedProd.qnt * clickedProd.price;

    if (clickedProd.qnt <= 0) {
      clickedProd.qnt = 0;
    }

    const filtered = prods.filter((prod) => prod.id !== id);
    filtered.push(clickedProd);
    localStorage.setItem('cart', JSON.stringify(filtered));
    prods = JSON.parse(localStorage.getItem('cart'));
    setTotal(prods);
  };

  return (
    <div>
      <div>
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {`${price}`.replace('.', ',')}
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ name }
        />
      </div>
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </p>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={ () => handleClickRemove() }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ product }
            onChange={ (event) => handleValue(event) }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ () => handleClickAdd() }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.defaultProps = {
  price: '',
  urlImage: '',
  name: '',
};

ProductCard.propTypes = {
  id: number.isRequired,
  price: string,
  urlImage: string,
  name: string,
  setResult: func.isRequired,
};

export default ProductCard;
