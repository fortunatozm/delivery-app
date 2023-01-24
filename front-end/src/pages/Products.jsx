import Navbar from '../components/Navbar';
import useApiGet from '../hooks/useApiGet';
import Product from '../components/Product';

function Products() {
  const { data, isFetching } = useApiGet('products');

  return (
    <div>
      <Navbar />
      {!isFetching && (
        <section>
          {data.map(({ id, imageUrl, name, price }) => (
            <Product
              key={ id }
              id={ id }
              imageUrl={ imageUrl }
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
