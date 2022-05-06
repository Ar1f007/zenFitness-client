import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../components';
import { useProductDetails } from '../hooks/useProductDetails';

export const ProductDetails = () => {
  const { id } = useParams();
  const {
    productDetails: { name, description, price, quantity, image, supplier },
    loading,
  } = useProductDetails(id);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="py-10 lg:py-20 lg:px-10 grid grid-cols-1 lg:grid-cols-2 content-center">
        <div className="flex justify-center items-center">
          <img src={image} alt={name} className="max-w-md" />
        </div>
        <div className="p-5 lg:p-20 lg:bg-base-200 ">
          <h1 className="text-4xl capitalize">{name}</h1>
          <p className="text-lg my-5">{description}</p>
          <p className="mb-2">Price: ${price}</p>
          <p className="mb-2">Supplier: {supplier}</p>
          <p className="mb-2">Quantity: {quantity}</p>
          {quantity > 0 ? (
            <div className="badge badge-accent p-3">in stock</div>
          ) : (
            <div className="badge badge-warning p-3">out of stock</div>
          )}
          <br />
          <button className="btn tracking-wider mt-5">Delivered</button>
          <br />
          <form>
            <input
              type="number"
              placeholder="update stock"
              className="input input-md  input-bordered w-full max-w-xs mt-5"
            />

            <button className="btn lg:ml-3 mt-5 lg:mt-0">Update Quantity</button>
          </form>
        </div>
      </section>

      <div className="flex justify-center">
        <Link to="/all-products" className="fancy mt-10">
          <span className="top-key"></span>
          <span className="text">Go to Inventory</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </Link>
      </div>
    </>
  );
};
