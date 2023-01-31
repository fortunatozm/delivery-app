import { string, number, instanceOf } from 'prop-types';

function SaleCard({ id, status, totalPrice, saleDate, deliveryAddress }) {
  return (
    <div>
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
    </div>
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
