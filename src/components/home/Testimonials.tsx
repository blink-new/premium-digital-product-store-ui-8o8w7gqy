import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Creative Director, Artistry Studios',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    quote: 'The quality of digital products from Lumina has dramatically improved our design workflow. Each item is thoughtfully crafted and integrates seamlessly into our projects.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Lead Designer, TechForward',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    quote: 'I\'ve purchased digital assets from many marketplaces, but Lumina stands out for its premium selection and exceptional quality. Their templates have saved me countless hours.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    title: 'Freelance Photographer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    quote: 'The presets and mockups I purchased from Lumina elevated my photography portfolio instantly. The customer service is just as impressive as the products themselves.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-charcoal text-pearl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">What Our Customers Say</h2>
          <p className="text-slate max-w-2xl mx-auto">
            Discover how our premium digital products have empowered creators and professionals worldwide.
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="absolute top-4 left-4 md:top-8 md:left-8 text-sapphire opacity-30"
            aria-hidden="true"
          >
            <Quote size={60} />
          </div>

          <div className="relative z-10 bg-charcoal/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="relative h-72 sm:h-64 md:h-56">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 20,
                    zIndex: activeIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full"
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <div className="md:flex items-center">
                    <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-sapphire/30">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <div className="font-medium text-lg">{testimonial.name}</div>
                          <div className="text-slate text-sm">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                    activeIndex === index ? 'bg-sapphire' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 right-4 md:right-8 w-32 h-32 border-2 border-amber rounded-full opacity-20" 
               style={{ transform: 'translateY(-50%)' }}></div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sapphire/10 rounded-full blur-2xl"></div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '500+',
              label: 'Premium Products',
              description: 'Carefully curated digital assets'
            },
            {
              number: '15K+',
              label: 'Happy Customers',
              description: 'From freelancers to enterprises'
            },
            {
              number: '99%',
              label: 'Satisfaction Rate',
              description: 'Based on customer feedback'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center bg-charcoal/30 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <div className="text-4xl md:text-5xl font-serif text-amber mb-2">{stat.number}</div>
              <div className="text-xl font-medium mb-2">{stat.label}</div>
              <div className="text-slate text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;