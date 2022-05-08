import { Link } from 'react-router-dom';

export const Supply = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 pt-10 pb-20 px-5 bg-base-100 ">
      <div
        className="hero max-w-3xl h-96 hover:-translate-y-1 "
        style={{ backgroundImage: 'url(images/home.jpg)', transitionDuration: '350ms' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Products for Home</h1>
            <Link
              to="/all-products"
              className="btn btn-outline hover:bg-primary hover:border-primary border-base-100 text-base-100"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hero max-w-3xl h-96 hover:-translate-y-1"
        style={{ backgroundImage: 'url(images/commericial.webp)', transitionDuration: '350ms' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Commercial Products</h1>

            <Link
              to="/all-products"
              className="btn btn-outline hover:bg-primary hover:border-primary border-base-100 text-base-100"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
