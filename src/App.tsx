import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Components
import Hero from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import CTASection from './components/home/CTASection';
import Testimonials from './components/home/Testimonials';

// Pages
import CollectionsPage from './pages/collections';
import ProductsPage from './pages/products';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import AccountPage from './pages/account';
import CartPage from './pages/cart';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <CTASection />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading ? (
          <div className="fixed inset-0 bg-pearl flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-serif font-medium tracking-tight mb-4">
                <span className="text-charcoal">Lumina</span>
                <span className="text-sapphire">.</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-sapphire to-amber relative overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-pearl animate-slide-right"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
