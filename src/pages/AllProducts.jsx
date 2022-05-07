import { useProducts } from '../hooks/useProducts';
import { ProductList, Spinner } from '../components';

export const AllProducts = () => {
  const { products, setProducts, loading } = useProducts();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {products?.length === 0 ? (
        <section className="min-h-screen bg-base-200 p-8 lg:p-20 flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl font-bold">No Products Available.</h1>
        </section>
      ) : (
        <ProductList
          pageTitle="My Products"
          btnText="Add new Product"
          link="/add-product"
          products={products}
          setProducts={setProducts}
        />
      )}
    </>
  );
};
