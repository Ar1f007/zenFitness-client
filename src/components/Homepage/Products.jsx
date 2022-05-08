import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import sliceIt from '../../utils/slicer';
import { Card } from '../Layout/Card';
import { Spinner } from '../Shared/Spinner';

export const Products = () => {
  const { products, loading } = useProducts();
  let data = sliceIt(Array.from(products));

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="pt-20 pb-16 px-5">
      <h2 className="text-3xl text-center uppercase mb-10 lg:mb-16">Products</h2>

      <div className="grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 gap-y-10 lg:gap-20">
        {data?.map((product, i) => (
          <Card product={product} key={i} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/all-products" className="fancy  lg:mt-20">
          <span className="top-key"></span>
          <span className="text">Go to Inventory</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </Link>
      </div>
    </section>
  );
};
