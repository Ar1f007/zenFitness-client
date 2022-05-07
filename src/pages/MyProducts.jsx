import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ProductList, Spinner } from '../components';
import { Link } from 'react-router-dom';

export const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/my-products', {
          headers: { authorization: 'Bearer ' + localStorage.getItem('token') },
        });

        setProducts(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {products?.length === 0 ? (
        <section className="min-h-screen bg-base-200 p-8 lg:p-20 flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl font-bold">You have not added any products yet.</h1>
          <div className="flex justify-center">
            <Link to="/add-product" className="btn btn-primary btn-wide my-10">
              Add product
            </Link>
          </div>
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
