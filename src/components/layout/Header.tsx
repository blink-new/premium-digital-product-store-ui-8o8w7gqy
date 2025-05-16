import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-pearl/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-serif font-medium tracking-tight"
        >
          <span className="text-charcoal">Lumina</span>
          <span className="text-sapphire">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/collections" className="text-charcoal hover:text-sapphire transition-colors">
            Collections
          </Link>
          <Link to="/products" className="text-charcoal hover:text-sapphire transition-colors">
            Products
          </Link>
          <Link to="/about" className="text-charcoal hover:text-sapphire transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-charcoal hover:text-sapphire transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Right Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-charcoal hover:text-sapphire transition-colors">
            <Search size={20} />
          </button>
          <Link to="/account" className="text-charcoal hover:text-sapphire transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-charcoal hover:text-sapphire transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-sapphire text-pearl text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-pearl z-40 flex flex-col animate-fade-in">
            <div className="container py-8 flex flex-col">
              <nav className="flex flex-col space-y-6 text-lg mb-8">
                <Link 
                  to="/collections" 
                  className="py-2 border-b border-slate/20 text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link 
                  to="/products" 
                  className="py-2 border-b border-slate/20 text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/about" 
                  className="py-2 border-b border-slate/20 text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="py-2 border-b border-slate/20 text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              <div className="flex justify-between">
                <Link 
                  to="/account" 
                  className="flex items-center space-x-2 text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={20} />
                  <span>Account</span>
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center space-x-2 text-charcoal relative"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                  <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-sapphire text-pearl text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;