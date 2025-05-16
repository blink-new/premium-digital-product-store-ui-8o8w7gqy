import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    title: 'Minimal Portfolio Template',
    category: 'Website Template',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$49',
    link: '/products/minimal-portfolio-template'
  },
  {
    id: 2,
    title: 'Icon Design Pack',
    category: 'Graphics',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$29',
    link: '/products/icon-design-pack'
  },
  {
    id: 3,
    title: 'Pro Mockup Bundle',
    category: 'Mockups',
    imageUrl: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$59',
    link: '/products/pro-mockup-bundle'
  },
  {
    id: 4,
    title: 'Elegant Serif Font',
    category: 'Typography',
    imageUrl: 'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$39',
    link: '/products/elegant-serif-font'
  },
  {
    id: 5,
    title: 'Photography Preset Collection',
    category: 'Tools',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$35',
    link: '/products/photography-preset-collection'
  },
  {
    id: 6,
    title: 'Wireframe UI Kit',
    category: 'UI Design',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: '$45',
    link: '/products/wireframe-ui-kit'
  }
];

const FeaturedProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollable = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollable);
      // Initial check
      checkScrollable();
      
      // Check on window resize
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollable);
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-pearl">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-2">Featured Products</h2>
            <p className="text-slate max-w-xl">
              Explore our curated collection of premium digital products for creative professionals.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link to="/products" className="flex items-center text-sapphire hover:text-sapphire/80 group">
              <span className="mr-2">View all products</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Scroll Navigation */}
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`rounded-full w-10 h-10 flex items-center justify-center bg-pearl shadow-md ${
                canScrollLeft ? 'text-charcoal hover:text-sapphire' : 'text-slate/40 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`rounded-full w-10 h-10 flex items-center justify-center bg-pearl shadow-md ${
                canScrollRight ? 'text-charcoal hover:text-sapphire' : 'text-slate/40 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Products Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProducts.map((product) => (
                <Link 
                  key={product.id}
                  to={product.link}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] snap-start group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-6 w-full">
                        <span className="inline-block px-3 py-1 bg-sapphire text-white text-sm rounded-full mb-2">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-slate mb-2">{product.category}</div>
                    <h3 className="text-xl font-serif text-charcoal mb-2 group-hover:text-sapphire transition-colors">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;