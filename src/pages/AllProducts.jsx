import { useProducts } from '../hooks/useProducts';
import { Spinner } from '../components';
import { useId, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';

export const AllProducts = () => {
  const { products, setProducts, loading } = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const id = useId();

  const [user] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = (id) => {
    if (!user) {
      navigate('/sign-in', { replace: true, state: { from: location } });
      return;
    }
    setShowModal(!showModal);
    setDeleteId(id);
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="min-h-screen">
        <div className="pt-10 lg:pt-20 pb-10 px-4 lg:px-0 flex justify-between">
          <h1 className="text-2xl lg:text-3xl ">All Products</h1>
          <Link to="/add-product" className="btn btn-primary btn-sm md:btn-md">
            Add new Product
          </Link>
        </div>

        <div className="overflow-x-auto pb-16">
          <table className="table table-zebra w-full ">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={`${id}-${i}`}>
                  <th>{i + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td className="flex space-x-2">
                    <Link to={`/products/details/${product._id}`} className="btn btn-info">
                      Details
                    </Link>
                    <button
                      className="btn btn-error hover:bg-red-500"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {showModal && (
        <Modal
          handleOnClickNoButton={handleClick}
          id={deleteId}
          products={products}
          setProducts={setProducts}
        />
      )}
    </>
  );
};
