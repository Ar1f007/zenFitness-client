import { useParams } from 'react-router-dom';
import { useProductDetails } from '../hooks/useProductDetails';

export const ProductDetails = () => {
  const { id } = useParams();
  const {
    productDetails: { name, description, price, quantity, image, supplier },
  } = useProductDetails(id);

  return (
    <section className="py-20 px-10 grid grid-cols-1 lg:grid-cols-2 content-center">
      <div className="flex justify-center items-center">
        <img src={image} alt={name} className="max-w-md" />
      </div>
      <div className="p-20 bg-base-200">
        <h1 className="text-4xl capitalize">{name}</h1>
        <p className="text-lg my-5">{description}</p>
        <p className="mb-2">Price: ${price}</p>
        <p className="mb-2">Supplier: {supplier}</p>
        <p className="mb-2">Quantity: {quantity}</p>
        {quantity > 0 ? (
          <div class="badge badge-accent p-3">in stock</div>
        ) : (
          <div class="badge badge-warning p-3">out of stock</div>
        )}
        <br />
        <button className="btn  tracking-wider btn-xs sm:btn-sm mt-5">Delivered</button>
        <br />
        <form>
          <input
            type="number"
            placeholder="update stock"
            class="input input-md  input-bordered w-full max-w-xs mt-5"
          />

          <button className="btn  ml-3 btn-xs sm:btn-sm md:btn-md">Update Quantity</button>
        </form>
      </div>
    </section>
  );
};
