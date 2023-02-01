import { string, number } from 'prop-types';
import { useHistory } from 'react-router-dom';
import formatDate from '../utils/formatDate';

function SaleCard({ id, status, totalPrice, saleDate, deliveryAddress }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/seller/orders/${id}`);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={ handleClick }
          data-testid={ `seller_orders__element-order-id-${id}` }
        >
          {`Pedido ${id}`}
        </button>
      </div>
      <div>
        <div>
          <div>
            <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
              {status}
            </p>
          </div>
          <div>
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              {formatDate(saleDate)}
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              {totalPrice}
            </p>
          </div>
        </div>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          {deliveryAddress}
        </p>
      </div>
    </div>
  );
}

SaleCard.propTypes = {
  id: number.isRequired,
  status: string.isRequired,
  totalPrice: number.isRequired,
  saleDate: string.isRequired,
  deliveryAddress: string.isRequired,
};

export default SaleCard;
