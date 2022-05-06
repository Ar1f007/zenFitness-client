import { useProducts } from '../hooks/useProducts';
import { Spinner } from '../components';
import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../components/Modal';

export const AllProducts = () => {
  const { products, setProducts, loading } = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const id = useId();

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = (id) => {
    setShowModal(!showModal);
    setDeleteId(id);
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section className="min-h-screen">
        <h1 className="text-3xl lg:text-4xl text-center pt-20 pb-10">All Products</h1>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
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
                  <th>{i}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td className="flex space-x-2">
                    <Link to={`/products/details/${product._id}`} className="btn btn-info">
                      Details
                    </Link>
                    <button className="btn modal-button" onClick={() => handleDelete(product._id)}>
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
