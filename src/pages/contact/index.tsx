import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you.
            Our team is here to help and respond to your inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-charcoal text-pearl rounded-xl p-8 md:p-10 h-full">
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              <p className="text-pearl/70 mb-8">
                Fill out the form or reach out directly using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sapphire/20 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-sapphire" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-pearl/70">123 Design Avenue, San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sapphire/20 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-sapphire" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-pearl/70">+1 (415) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sapphire/20 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-sapphire" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-pearl/70">support@luminastore.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sapphire/20 rounded-full p-3 mr-4">
                    <Clock size={20} className="text-sapphire" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-pearl/70">Monday - Friday: 9AM - 5PM PST</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-sapphire/20 rounded-full filter blur-xl"></div>
              <div className="absolute top-10 left-10 w-24 h-24 bg-amber/10 rounded-full filter blur-xl"></div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-serif mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-slate/20'
                        } focus:outline-none focus:border-sapphire`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-slate/20'
                        } focus:outline-none focus:border-sapphire`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-slate/20'
                      } focus:outline-none focus:border-sapphire`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Support Request">Support Request</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-slate/20'
                      } focus:outline-none focus:border-sapphire resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary flex items-center justify-center w-full md:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader size={18} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-slate max-w-2xl mx-auto">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What file formats do your digital products come in?',
                answer: 'Our products come in various industry-standard formats. UI kits typically include Figma, Sketch, and Adobe XD files. Fonts come with OTF and TTF formats. Templates include source files for the respective platforms, and all products have detailed documentation.'
              },
              {
                question: 'Can I use your products for commercial projects?',
                answer: 'Yes, all products purchased from Lumina come with a commercial license, allowing you to use them in both personal and commercial projects. Some products have extended license options for specific use cases.'
              },
              {
                question: 'How do I get support for products I\'ve purchased?',
                answer: 'After purchasing a product, you can access support through your account dashboard. Click on the product and select "Get Support" to submit a ticket. Our support team typically responds within 24-48 hours.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 14-day money-back guarantee for most products if they don\'t meet your expectations. Some custom or limited products may have different refund policies, which will be clearly stated on the product page.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <div className="flex items-start">
                  <div className="bg-sapphire/10 rounded-full p-2 mr-4 mt-1">
                    <MessageSquare size={16} className="text-sapphire" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-slate">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate mb-4">
              Still have questions? Contact our support team.
            </p>
            <button className="btn-secondary">
              View All FAQs
            </button>
          </div>
        </div>

        {/* Map and Live Chat */}
        <div className="bg-charcoal/5 rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif mb-4">Visit Our Office</h2>
              <p className="text-slate mb-6">
                Located in the heart of San Francisco's design district, our office is a creative space where our team works to curate the best digital products.
              </p>
              
              <div className="h-64 rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.09304841456!2d-122.4376!3d37.7577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620751714309!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lumina office location"
                ></iframe>
              </div>
              
              <p className="text-sm text-slate">
                123 Design Avenue, San Francisco, CA 94107
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-4">Need Immediate Help?</h2>
              <p className="text-slate mb-6">
                Our customer support team is available during business hours through live chat. Get instant answers to your questions.
              </p>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-green-600">Currently Online</p>
                  </div>
                </div>
                
                <p className="text-slate mb-4">
                  Start a conversation with our support team now. Average response time: 2 minutes.
                </p>
                
                <button className="btn-primary w-full flex items-center justify-center">
                  <MessageSquare size={18} className="mr-2" />
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Check = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Loader = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
);

export default ContactPage;