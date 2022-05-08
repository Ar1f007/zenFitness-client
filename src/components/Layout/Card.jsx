import { Link } from 'react-router-dom';
import cutShort from '../../utils/cutShort';

export const Card = ({ product: { _id, image, name, description, price, quantity, supplier } }) => {
  return (
    <div className="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>
          {description?.length < 120 ? description : cutShort(description)}{' '}
          <span className="font-semibold">. . .</span>
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Price: <span className="font-semibold pl-1">${price.toFixed(2)}</span>
          </div>
          <div className="badge badge-outline">
            Quantity: <span className="font-semibold pl-1">{quantity}</span>
          </div>
          <div className="badge badge-outline">
            Supplier: <span className="font-semibold pl-1">{supplier}</span>
          </div>
        </div>
        <Link to={`/products/details/${_id}`} className="btn btn-primary mt-5">
          View details
        </Link>
      </div>
    </div>
  );
};
