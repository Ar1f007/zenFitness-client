import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../components';
import { useProductDetails } from '../hooks/useProductDetails';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const customId = 'toast';
export const ProductDetails = () => {
  const { id } = useParams();

  const {
    productDetails: { name, description, price, quantity, image, supplier },
    loading,
  } = useProductDetails(id);

  const [prodQuantity, setProdQuantity] = useState(quantity);
  const [restockAmount, setRestockAmount] = useState('');

  useEffect(() => {
    setProdQuantity(quantity);
  }, [quantity]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelivered = async () => {
    try {
      const { data } = await axios.put(`http://localhost:5000/products/${id}/update-quantity`, {
        quantity: prodQuantity - 1,
      });

      if (data.acknowledged) {
        toast.success('Delivered successfully');
        setProdQuantity((prev) => prev - 1);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRestock = async (e) => {
    e.preventDefault();

    try {
      if (restockAmount <= 0) {
        toast.error('Restock amount must be greater than zero', {
          toastId: customId,
        });
        return;
      }

      if (restockAmount % 1 !== 0) {
        toast.error('Please provide integer value', {
          toastId: customId,
        });
        return;
      }

      const { data } = await axios.put(`http://localhost:5000/products/${id}/restock`, {
        restockAmount: quantity + restockAmount,
      });

      if (data.acknowledged) {
        toast.success('Quantity updated successfully');

        setProdQuantity((prev) => prev + restockAmount);
        setRestockAmount('');
      }
    } catch (error) {
      toast.error(error.message, {
        toastId: customId,
      });
    }
  };

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
          <p className="mb-2">Quantity: {prodQuantity}</p>
          {prodQuantity > 0 ? (
            <div className="badge badge-accent p-3">in stock</div>
          ) : (
            <div className="badge badge-warning p-3">out of stock</div>
          )}
          <br />
          <button
            className="btn tracking-wider mt-5"
            disabled={prodQuantity <= 0}
            onClick={() => handleDelivered(quantity)}
          >
            Delivered
          </button>
          <br />
          <form onSubmit={handleRestock}>
            <input
              type="number"
              placeholder="update product stock. eg: 100"
              className="input input-md  input-bordered w-full max-w-xs mt-5"
              value={restockAmount}
              onChange={(e) => setRestockAmount(Number(e.target.value))}
            />

            <button className="btn lg:ml-3 mt-5 lg:mt-0">Restock</button>
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
