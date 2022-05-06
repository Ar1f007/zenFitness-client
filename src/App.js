import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, NotFound, ProductDetails } from './pages';
import { SignIn } from './pages/SignIn';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/details/:id" element={<ProductDetails />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
