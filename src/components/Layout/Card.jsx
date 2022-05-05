import { Link } from 'react-router-dom';

export const Card = ({ product: { image, name, description, price, quantity, supplier } }) => {
  return (
    <div class="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">
            Price: <span className="font-semibold pl-1">${price}</span>
          </div>
          <div class="badge badge-outline">
            Quantity: <span className="font-semibold pl-1">{quantity}</span>
          </div>
          <div class="badge badge-outline">
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
