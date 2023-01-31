import Navbar from '../components/Navbar';
import SaleCard from '../components/SaleCard';
import useApiGet from '../hooks/useApiGet';

function Orders() {
  const { data, isFetching } = useApiGet('sales');

  return (
    <div>
      <Navbar isSeller />
      <div>
        {isFetching && data.map((sale) => <SaleCard key={ sale.id } { ...sale } />)}
      </div>
    </div>
  );
}

export default Orders;
