import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home } from './pages';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
