import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sapphire/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="container relative z-10">
        <div className="bg-charcoal rounded-2xl overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sapphire/20 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/10 rounded-tr-full"></div>
          
          <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-pearl mb-6">
                Join Our Creative Community
              </h2>
              <p className="text-slate/90 text-lg mb-8">
                Subscribe to our newsletter and be the first to access exclusive products, special offers, and creative insights to elevate your projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-6 py-3 rounded-md bg-white/10 border border-white/20 text-pearl placeholder:text-slate focus:outline-none focus:border-sapphire w-full sm:max-w-xs"
                />
                <button className="btn-accent flex items-center gap-2 group whitespace-nowrap">
                  Subscribe
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-pearl/5 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-pearl/20 rounded-full animate-spin-slow"></div>
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-pearl/10">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Creative workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 -right-4 bg-amber text-charcoal px-4 py-2 rounded-full font-medium">
                Join us today!
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Templates",
              description: "Ready-to-use professional designs",
              link: "/collections/templates",
              imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Graphics",
              description: "High-quality visual elements",
              link: "/collections/graphics",
              imageSrc: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Fonts",
              description: "Distinctive typography solutions",
              link: "/collections/fonts",
              imageSrc: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Tools",
              description: "Powerful creative resources",
              link: "/collections/tools",
              imageSrc: "https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Link 
                to={category.link}
                className="group block rounded-lg overflow-hidden h-full"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={category.imageSrc}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/30 transition-colors">
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-serif text-pearl mb-2">{category.title}</h3>
                      <p className="text-pearl/80 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center text-amber group-hover:text-pearl transition-colors">
                        <span className="mr-2 font-medium">Explore</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;