import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import { CartProvider } from './context/CartContext';

// Simple Footer Component
const Footer = () => (
  <footer className="bg-black/50 border-t border-white/5 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-500 mb-4">© 2024 الحقيقة المخفية. جميع الحقوق محفوظة.</p>
      <div className="text-xs text-gray-600">
        تحذير: المحتوى المقدم في هذا الموقع لأغراض البحث والترفيه فقط.
      </div>
    </div>
  </footer>
);

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-mystic-dark text-gray-100 font-sans selection:bg-mystic-accent selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;