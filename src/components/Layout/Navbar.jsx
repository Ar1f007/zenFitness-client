import { useId } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const navigation = [
  {
    name: 'Home',
    path: '/',
  },
  { name: 'About Us', path: '/about-us' },
];

const protectedLinks = [
  { name: 'Manage Products', path: '/all-products' },
  { name: 'My Products', path: '/my-products' },
  { name: 'Add Product', path: '/add-product' },
];
export const Navbar = () => {
  const id = useId();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  return (
    <div className="bg-base-100">
      <div className="container mx-auto navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigation.map((item) => (
                <li key={`${id}-${item.name}`}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span className="text-primary">Z</span>en<span className="text-primary">F</span>itness
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navigation.map((link) => (
              <li key={`${id}-${link.name}`}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
            {user
              ? protectedLinks.map((link) => (
                  <li key={`${id}-${link.name}`}>
                    <NavLink to={link.path}>{link.name}</NavLink>
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <button className="btn loading px-9"></button>
          ) : user ? (
            <button
              className="btn"
              onClick={async () => {
                try {
                  await signOut(auth);
                  localStorage.removeItem('token');
                  navigate('/');
                } catch (error) {
                  toast.error('Something went wrong!');
                }
              }}
            >
              Sign out
            </button>
          ) : (
            <Link to="/sign-in" className="btn">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
