import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img
          className="w-full"
          src="https://i.ibb.co/CKYk3f2/404-error.webp"
          alt="404 error with cute animal concept illustration"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-neutral">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-neutral">
          The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the
          link.
        </p>
        <p className="py-2 text-base text-neutral">
          Sorry about that! Please visit our hompage to get where you need to go.
        </p>

        <Link
          to="/"
          className="btn btn-wide btn-primary sm:btn-sm md:btn-md lg:btn-lg mt-5 normal-case"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};
