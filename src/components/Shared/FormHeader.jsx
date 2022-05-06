import { Link } from 'react-router-dom';

export const FormHeader = ({ heading, queryText, link, goto }) => {
  return (
    <>
      <p
        tabIndex={0}
        aria-label="Login to your account"
        className="text-2xl font-extrabold leading-6 text-neutral"
      >
        {heading}
      </p>
      <p className="text-sm mt-4 font-medium leading-none text-gray-500">
        {queryText}{' '}
        <Link
          to={link}
          tabIndex={0}
          aria-label="Sign up here"
          className="text-sm font-medium leading-none underline text-neutral cursor-pointer"
        >
          {goto}
        </Link>
      </p>
    </>
  );
};
