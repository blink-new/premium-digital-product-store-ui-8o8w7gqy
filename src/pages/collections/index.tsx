import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

type Collection = {
  id: number;
  title: string;
  description: string;
  image: string;
  productCount: number;
};

const collections: Collection[] = [
  {
    id: 1,
    title: 'Creative Workflow Suite',
    description: 'A comprehensive collection of digital tools designed to streamline your creative process.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 25
  },
  {
    id: 2,
    title: 'UI Design Essentials',
    description: 'Premium UI kits, wireframes, and design templates for modern digital interfaces.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 18
  },
  {
    id: 3,
    title: 'Photography Presets',
    description: 'Professional-grade photo editing presets for stunning visual results.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 32
  },
  {
    id: 4,
    title: 'Motion Graphics Templates',
    description: 'Dynamic templates for creating engaging animated content.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 15
  },
  {
    id: 5,
    title: '3D Assets & Models',
    description: 'High-quality 3D models and assets for game development and digital art.',
    image: 'https://images.unsplash.com/photo-1618325500063-14cd8117369c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 28
  },
  {
    id: 6,
    title: 'Font Collection',
    description: 'Premium typefaces and font families for distinctive typography.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    productCount: 42
  }
];

const CollectionsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="relative overflow-hidden rounded-xl mb-12">
          <div className="relative z-10 p-12 md:p-16 lg:p-20 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-pearl">Collection Showcase</h1>
            <p className="text-lg text-pearl/80 mb-8">Explore our curated collections of premium digital assets designed to elevate your creative projects.</p>
            <div className="h-1 w-24 bg-amber"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-charcoal/60 z-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1561909848-176cd4fb080a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Collection showcase"
            className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay z-[-1]"
          />
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 bg-pearl border border-slate/20 rounded-lg px-4 py-2 text-charcoal hover:border-sapphire transition-colors"
          >
            <Filter size={18} />
            <span>Filter Collections</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-slate">Sort by:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-pearl border border-slate/20 rounded-lg px-4 py-2 pr-10 text-charcoal focus:outline-none focus:border-sapphire"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="nameAsc">Name (A-Z)</option>
                <option value="nameDesc">Name (Z-A)</option>
                <option value="countAsc">Product Count (Low-High)</option>
                <option value="countDesc">Product Count (High-Low)</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters Panel - Mobile Slide-in */}
        {filterOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-pearl"
          >
            <div className="p-4 border-b border-slate/20 flex justify-between items-center">
              <h3 className="font-medium">Filter Collections</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-charcoal p-2"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Category</h4>
                {['Design', 'Photography', 'Video', '3D', 'Typography', 'Audio'].map((category) => (
                  <div key={category} className="flex items-center mb-2">
                    <input type="checkbox" id={category} className="mr-3" />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Price Range</h4>
                {['Free', '$1 - $50', '$51 - $100', '$101 - $200', '$200+'].map((price) => (
                  <div key={price} className="flex items-center mb-2">
                    <input type="checkbox" id={price} className="mr-3" />
                    <label htmlFor={price}>{price}</label>
                  </div>
                ))}
              </div>
              <button className="w-full btn-primary">Apply Filters</button>
            </div>
          </motion.div>
        )}

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/collections/${collection.id}`} className="block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-charcoal/80 backdrop-blur-sm text-pearl rounded-full px-3 py-1 text-sm">
                      {collection.productCount} Products
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-serif mb-2 group-hover:text-sapphire transition-colors">{collection.title}</h3>
                    <p className="text-slate mb-4 flex-grow">{collection.description}</p>
                    <div className="text-sapphire font-medium inline-flex items-center">
                      Explore Collection
                      <ChevronDown size={16} className="ml-1 transform -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-20 bg-charcoal/5 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Stay Updated</h2>
            <p className="text-slate mb-8">Subscribe to our newsletter for exclusive updates on new collections and premium digital products.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow rounded-lg border border-slate/20 px-4 py-3 focus:outline-none focus:border-sapphire"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe Now</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CollectionsPage;