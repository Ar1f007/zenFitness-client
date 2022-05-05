import { Link } from 'react-router-dom';

export const Card = ({ product: { image, name, description, price, quantity, supplier } }) => {
  return (
    <div className="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Price: <span className="font-semibold pl-1">${price}</span>
          </div>
          <div className="badge badge-outline">
            Quantity: <span className="font-semibold pl-1">{quantity}</span>
          </div>
          <div className="badge badge-outline">
            Supplier: <span className="font-semibold pl-1">{supplier}</span>
          </div>
        </div>
        <Link to="/manage-inventory" className="btn btn-primary mt-5">
          Manage
        </Link>
      </div>
    </div>
  );
};
