import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, ChevronDown, Star, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  type: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    title: "Modern UI Kit Pro",
    type: "UI Templates",
    price: 79,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.8,
    reviewCount: 124,
    featured: true
  },
  {
    id: 2,
    title: "Photography Master Presets",
    type: "Presets",
    price: 49,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.9,
    reviewCount: 87
  },
  {
    id: 3,
    title: "3D Icons Collection",
    type: "3D Assets",
    price: 39,
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.7,
    reviewCount: 63
  },
  {
    id: 4,
    title: "Motion Graphics Kit",
    type: "Video Templates",
    price: 59,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.6,
    reviewCount: 42,
    featured: true
  },
  {
    id: 5,
    title: "Helvetica Neue Font Family",
    type: "Fonts",
    price: 29,
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: 6,
    title: "Social Media Toolkit",
    type: "Marketing",
    price: 89,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.7,
    reviewCount: 52
  },
  {
    id: 7,
    title: "Website Wireframe Templates",
    type: "UI Templates",
    price: 69,
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.8,
    reviewCount: 36
  },
  {
    id: 8,
    title: "Cinematic LUTs Pack",
    type: "Video",
    price: 99,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.9,
    reviewCount: 93
  },
  {
    id: 9,
    title: "Sketch UI Components",
    type: "UI Templates",
    price: 49,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    rating: 4.6,
    reviewCount: 47
  }
];

const ProductsPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sort) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'priceLow':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameDesc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [searchTerm, sort]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Premium Digital Products</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Browse our curated selection of high-quality digital products designed to elevate your creative projects.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white shadow-sm rounded-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate/20 focus:outline-none focus:border-sapphire"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 bg-pearl border border-slate/20 rounded-lg px-4 py-2 text-charcoal hover:border-sapphire transition-colors"
              >
                <Filter size={18} />
                <span>Filter</span>
              </button>
              
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-pearl border border-slate/20 rounded-lg px-4 py-2 pr-10 text-charcoal focus:outline-none focus:border-sapphire"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="nameAsc">Name: A to Z</option>
                  <option value="nameDesc">Name: Z to A</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate pointer-events-none" />
              </div>
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
              <h3 className="font-medium">Filter Products</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-charcoal p-2"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Product Type</h4>
                {['UI Templates', 'Presets', '3D Assets', 'Video Templates', 'Fonts', 'Marketing'].map((type) => (
                  <div key={type} className="flex items-center mb-2">
                    <input type="checkbox" id={type} className="mr-3" />
                    <label htmlFor={type}>{type}</label>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Price Range</h4>
                {['Under $50', '$50 - $100', '$100 - $200', '$200+'].map((price) => (
                  <div key={price} className="flex items-center mb-2">
                    <input type="checkbox" id={price} className="mr-3" />
                    <label htmlFor={price}>{price}</label>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-3">Rating</h4>
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center mb-2">
                    <input type="checkbox" id={`rating-${rating}`} className="mr-3" />
                    <label htmlFor={`rating-${rating}`} className="flex items-center">
                      {rating}+ <Star size={14} className="ml-1 text-amber fill-amber" />
                    </label>
                  </div>
                ))}
              </div>
              <button className="w-full btn-primary">Apply Filters</button>
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Link to={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-pearl text-charcoal rounded-full px-4 py-2 font-medium">View Details</span>
                      </div>
                    </div>
                  </Link>
                  
                  {product.featured && (
                    <div className="absolute top-3 left-3 bg-sapphire text-pearl text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                  
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                    <Heart size={18} className="text-charcoal hover:text-rose-500 transition-colors" />
                  </button>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <div className="text-sm text-slate mb-1">{product.type}</div>
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-xl font-serif mb-2 group-hover:text-sapphire transition-colors">{product.title}</h3>
                    </Link>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-amber">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(product.rating) ? "fill-amber" : "text-slate/30"}
                          />
                        ))}
                      </div>
                      <span className="text-slate text-sm ml-2">{product.rating} ({product.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-serif font-medium">${product.price}</span>
                    <button className="flex items-center gap-1 btn-primary py-2 px-4">
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-slate/20 flex items-center justify-center text-charcoal hover:border-sapphire disabled:opacity-50 disabled:hover:border-slate/20">
              &lt;
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button 
                key={page}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  page === 1 
                    ? 'bg-sapphire text-pearl' 
                    : 'border border-slate/20 text-charcoal hover:border-sapphire'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 rounded-full border border-slate/20 flex items-center justify-center text-charcoal hover:border-sapphire">
              &gt;
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsPage;