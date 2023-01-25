import React from 'react';
import { number, string } from 'prop-types';

function ProductCard({ id, price, urlImage, name }) {
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
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ 0 }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
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
