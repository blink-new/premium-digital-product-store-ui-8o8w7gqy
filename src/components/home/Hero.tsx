import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative"
      style={{
        backgroundImage: `radial-gradient(
          800px circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          rgba(21, 91, 216, 0.1), 
          transparent
        )`
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-sapphire/5 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber/5 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000 opacity-70"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
              Digital Excellence,{' '}
              <span className="text-sapphire">Curated</span>{' '}
              for Creators
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Discover our premium collection of digital products that empower your creative workflow. From templates to tools, elevate your projects with our curated selection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/collections" 
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Collections
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-24 relative"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Digital product showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-block bg-pearl text-charcoal text-sm font-medium px-3 py-1 rounded mb-3">
                Featured Collection
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-pearl mb-2">
                Creative Workflow Suite
              </h3>
              <p className="text-pearl/80 max-w-md">
                A comprehensive collection of digital tools designed to streamline your creative process.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-amber rounded-lg z-[-1]"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 border-2 border-sapphire rounded-lg z-[-1]"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;