import Navbar from '../components/Navbar';
import useApiGet from '../hooks/useApiGet';
import ProductCard from '../components/ProductCard';
import useLoginValidator from '../hooks/useLoginValidator';

function Products() {
  const { data, errorStatus, isFetching } = useApiGet('products');
  useLoginValidator(errorStatus);

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
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Products;
