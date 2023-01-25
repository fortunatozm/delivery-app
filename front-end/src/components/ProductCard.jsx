import React from 'react';
import { number, string } from 'prop-types';

function ProductCard({ id, price, imageUrl, name }) {
  return (
    <div>
      <div>
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price}
        </span>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ name }
          alt={ imageUrl }
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
  imageUrl: '',
  name: '',
};

ProductCard.propTypes = {
  id: number.isRequired,
  price: string,
  imageUrl: string,
  name: string,
};

export default ProductCard;
