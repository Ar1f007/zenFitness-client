import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar, Protected } from './components';
import { AllProducts, Home, NotFound, ProductDetails, SignIn, SignUp } from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route
            path="/products/details/:id"
            element={
              <Protected>
                <ProductDetails />
              </Protected>
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
