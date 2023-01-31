import { string, number, instanceOf } from 'prop-types';
import { useHistory } from 'react-router-dom';

function SaleCard({ id, status, totalPrice, saleDate, deliveryAddress }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/seller/orders/${id}`);
  };

  return (
    <button type="button" onClick={ handleClick }>
      <div>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>
          {`Pedido ${id}`}
        </p>
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
              {saleDate}
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
    </button>
  );
}

SaleCard.propTypes = {
  id: number.isRequired,
  status: string.isRequired,
  totalPrice: number.isRequired,
  saleDate: instanceOf(Date).isRequired,
  deliveryAddress: string.isRequired,
};

export default SaleCard;
