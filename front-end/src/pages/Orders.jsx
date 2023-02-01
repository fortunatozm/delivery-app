import Navbar from '../components/Navbar';
import SaleCard from '../components/SaleCard';
import useApiGet from '../hooks/useApiGet';

function Orders() {
  const { data, isFetching } = useApiGet('sales');

  return (
    <div>
      <Navbar isSeller />
      <div>
        {!isFetching
          && data.map(({ id, status, totalPrice, saleDate, deliveryAddress }) => (
            <SaleCard
              key={ id }
              id={ id }
              status={ status }
              totalPrice={ Number(totalPrice) }
              saleDate={ saleDate }
              deliveryAddress={ deliveryAddress }
            />
          ))}
      </div>
    </div>
  );
}

export default Orders;
