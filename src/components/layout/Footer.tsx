import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-pearl pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-medium mb-4 block">
              <span className="text-pearl">Lumina</span>
              <span className="text-sapphire">.</span>
            </Link>
            <p className="text-slate text-sm mt-4 mb-6 max-w-xs">
              Premium digital products curated for creators, designers, and innovators. 
              Elevate your digital toolkit with our handpicked selection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate hover:text-pearl transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate hover:text-pearl transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate hover:text-pearl transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate hover:text-pearl transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/collections/templates" className="text-slate hover:text-pearl transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/collections/fonts" className="text-slate hover:text-pearl transition-colors">
                  Fonts
                </Link>
              </li>
              <li>
                <Link to="/collections/graphics" className="text-slate hover:text-pearl transition-colors">
                  Graphics
                </Link>
              </li>
              <li>
                <Link to="/collections/tools" className="text-slate hover:text-pearl transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link to="/collections/mockups" className="text-slate hover:text-pearl transition-colors">
                  Mockups
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate hover:text-pearl transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate hover:text-pearl transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate hover:text-pearl transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate hover:text-pearl transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-slate hover:text-pearl transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-slate hover:text-pearl transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-slate hover:text-pearl transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/license" className="text-slate hover:text-pearl transition-colors">
                  License Agreement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-serif text-lg mb-2">Stay in the loop</h3>
              <p className="text-slate text-sm">Subscribe to our newsletter for updates and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-charcoal border border-slate/30 rounded-l-md py-3 px-4 text-pearl placeholder:text-slate focus:outline-none focus:border-sapphire w-full md:w-64"
              />
              <button className="bg-sapphire hover:bg-sapphire/90 rounded-r-md text-pearl py-3 px-4 transition-colors flex items-center">
                <Mail size={18} className="mr-2" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-slate/20 text-slate text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Lumina. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span>Designed with ♥ for premium digital products</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;