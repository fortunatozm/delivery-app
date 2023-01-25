import React, { useState } from 'react';
import { number, string } from 'prop-types';
import setStorage from '../storage/localStorage';

function ProductCard({ id, price, urlImage, name }) {
  const [product, setProduct] = useState(0);
  const handleClickAdd = (idProduct, priceProduct, nameProduct) => {
    setProduct(product + 1);
    setStorage(idProduct, priceProduct, nameProduct, product);
  };
  const handleClickRemove = () => {
    setProduct(product - 1);
    if (product <= 0) {
      setProduct(0);
    }
  };
  const handleValue = ({ target }) => {
    setProduct(Number(target.value));
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
            onClick={ () => handleClickAdd(id, price, name) }
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
};

export default ProductCard;
