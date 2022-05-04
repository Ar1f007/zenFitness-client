import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';

export default function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
