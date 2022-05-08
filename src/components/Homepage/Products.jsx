import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { Card } from '../Layout/Card';
import { Spinner } from '../Shared/Spinner';

export const Products = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="py-20 px-5">
      <h2 className="text-3xl text-center uppercase mb-10 lg:mb-16">Products</h2>

      <div className="grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 gap-y-10 lg:gap-20">
        {products?.slice(0, 6).map((product, i) => (
          <Card product={product} key={i} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/all-products" className="fancy mt-10 lg:mt-20">
          <span className="top-key"></span>
          <span className="text">Go to Inventory</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </Link>
      </div>
    </section>
  );
};
