import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ChevronRight, ShoppingBag, Lock, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

type CartItem = {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  quantity: number;
  licenseType: 'standard' | 'extended';
};

type PromoCode = {
  code: string;
  discount: number;
  valid: boolean;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Modern UI Kit Pro',
      type: 'UI Templates',
      price: 79,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      quantity: 1,
      licenseType: 'standard'
    },
    {
      id: 2,
      name: 'Photography Master Presets',
      type: 'Presets',
      price: 49,
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      quantity: 1,
      licenseType: 'extended'
    }
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const licenseMultiplier = item.licenseType === 'extended' ? 2.5 : 1;
    return sum + (item.price * licenseMultiplier * item.quantity);
  }, 0);
  
  const discount = appliedPromo ? (subtotal * appliedPromo.discount) : 0;
  const total = subtotal - discount;
  
  // Handle quantity changes
  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  
  // Handle license type changes
  const updateLicenseType = (id: number, licenseType: 'standard' | 'extended') => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, licenseType } : item
      )
    );
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // Apply promo code
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'WELCOME20') {
      setAppliedPromo({
        code: 'WELCOME20',
        discount: 0.2, // 20% discount
        valid: true
      });
    } else {
      setAppliedPromo({
        code: promoCode,
        discount: 0,
        valid: false
      });
      
      // Reset promo code after 3 seconds if invalid
      setTimeout(() => {
        setAppliedPromo(null);
        setPromoCode(''); // Ensured this line is correct
      }, 3000);
    }
  };

  // Checkout steps content
  const renderCheckoutSteps = () => {
    switch (checkoutStep) {
      case 1: // Cart Review
        return (
          <div className="space-y-6">
            <div className="text-xl font-serif mb-4">Your Cart ({cartItems.length} items)</div>
            
            {/* Empty cart state */}
            {cartItems.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <ShoppingBag size={48} className="mx-auto text-slate/40 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-slate mb-6">Looks like you haven't added any products to your cart yet.</p>
                <Link to="/products" className="btn-primary">
                  Browse Products
                </Link>
              </div>
            )}
            
            {/* Cart items */}
            {cartItems.map((item) => {
              const licenseMultiplier = item.licenseType === 'extended' ? 2.5 : 1;
              const itemTotal = item.price * licenseMultiplier * item.quantity;
              
              return (
                <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/5 h-32 md:h-auto">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-4/5">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div className="mb-4 md:mb-0">
                          <div className="text-sm text-slate mb-1">{item.type}</div>
                          <h4 className="font-medium text-lg">{item.name}</h4>
                        </div>
                        <div className="text-xl font-serif">${itemTotal.toFixed(2)}</div>
                      </div>
                      
                      <div className="mt-4 md:flex md:justify-between md:items-end">
                        <div className="mb-4 md:mb-0">
                          <div className="text-sm font-medium mb-2">License Type</div>
                          <div className="flex gap-2">
                            <button
                              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                                item.licenseType === 'standard' 
                                  ? 'bg-sapphire/10 text-sapphire' 
                                  : 'bg-slate/10 text-slate hover:bg-slate/20'
                              }`}
                              onClick={() => updateLicenseType(item.id, 'standard')}
                            >
                              Standard (${item.price})
                            </button>
                            <button
                              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                                item.licenseType === 'extended' 
                                  ? 'bg-sapphire/10 text-sapphire' 
                                  : 'bg-slate/10 text-slate hover:bg-slate/20'
                              }`}
                              onClick={() => updateLicenseType(item.id, 'extended')}
                            >
                              Extended (${(item.price * 2.5).toFixed(2)})
                            </button>
                          </div>
                          {item.licenseType === 'extended' && (
                            <div className="flex items-center mt-2 text-xs text-slate">
                              <Info size={12} className="mr-1" />
                              Extended license allows use in multiple commercial projects
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex items-center border border-slate/20 rounded-lg overflow-hidden mr-4">
                            <button
                              className="p-2 text-slate hover:bg-slate/10 transition-colors"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <div className="w-10 text-center">{item.quantity}</div>
                            <button
                              className="p-2 text-slate hover:bg-slate/10 transition-colors"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button
                            className="text-red-500 hover:text-red-600 transition-colors"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Promo code */}
            {cartItems.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-lg font-medium mb-4">Promo Code</div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        appliedPromo?.valid === false ? 'border-red-500' : 'border-slate/20'
                      } focus:outline-none focus:border-sapphire`}
                    />
                    {appliedPromo?.valid === false && (
                      <div className="text-red-500 text-sm mt-1">Invalid promo code</div>
                    )}
                    {appliedPromo?.valid === true && (
                      <div className="text-green-600 text-sm mt-1 flex items-center">
                        <CheckCircle size={14} className="mr-1" />
                        {appliedPromo.discount * 100}% discount applied
                      </div>
                    )}
                  </div>
                  <button
                    className="btn-secondary whitespace-nowrap"
                    onClick={applyPromoCode}
                    disabled={!promoCode.trim() || appliedPromo?.valid}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      case 2: // Payment Information
        return (
          <div className="space-y-6">
            <div className="text-xl font-serif mb-4">Payment Information</div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <div className="text-lg font-medium mb-4">Billing Address</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate mb-1">Address</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">City</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">Zip/Postal Code</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">State/Province</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate mb-1">Country</label>
                    <select className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate/10 pt-6">
                <div className="text-lg font-medium mb-4">Payment Method</div>
                
                <div className="space-y-6">
                  <div className="border border-sapphire rounded-lg p-4 bg-sapphire/5 relative">
                    <div className="absolute top-4 right-4">
                      <div className="flex space-x-2">
                        <span className="bg-slate/10 rounded p-1">
                          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" fill="white" stroke="#E2E8F0"/>
                            <path d="M9 11.5H15V13H9V11.5Z" fill="#2D2D2D"/>
                            <path d="M9 8.5H15V10H9V8.5Z" fill="#2D2D2D"/>
                            <path d="M13.5 3H10.5C9.67157 3 9 3.67157 9 4.5V6H15V4.5C15 3.67157 14.3284 3 13.5 3Z" fill="#155BD8"/>
                          </svg>
                        </span>
                        <span className="bg-slate/10 rounded p-1">
                          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="23" height="15" rx="1.5" fill="white" stroke="#E2E8F0"/>
                            <path d="M12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4Z" fill="#F5A623"/>
                            <path d="M12 4C10.4023 4 9 5.79086 9 8C9 10.2091 10.4023 12 12 12C13.5977 12 15 10.2091 15 8C15 5.79086 13.5977 4 12 4Z" fill="#F5A623"/>
                            <path d="M12 4C10.8954 4 10 5.79086 10 8C10 10.2091 10.8954 12 12 12C13.1046 12 14 10.2091 14 8C14 5.79086 13.1046 4 12 4Z" fill="#CD6116"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                    
                    <input type="radio" id="credit-card" name="payment-method" className="sr-only" defaultChecked />
                    <label htmlFor="credit-card" className="flex items-start cursor-pointer">
                      <span className="relative flex items-center justify-center w-5 h-5 border border-sapphire rounded-full mr-3">
                        <span className="absolute w-3 h-3 bg-sapphire rounded-full"></span>
                      </span>
                      <div>
                        <span className="font-medium block">Credit/Debit Card</span>
                        <span className="text-sm text-slate">Secure payment via Stripe</span>
                      </div>
                    </label>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate mb-1">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate mb-1">Expiration Date</label>
                        <input 
                          type="text" 
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate mb-1">CVC</label>
                        <input 
                          type="text" 
                          placeholder="123"
                          className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-slate/20 rounded-lg p-4">
                    <input type="radio" id="paypal" name="payment-method" className="sr-only" />
                    <label htmlFor="paypal" className="flex items-start cursor-pointer">
                      <span className="relative flex items-center justify-center w-5 h-5 border border-slate/30 rounded-full mr-3">
                        <span className="absolute w-3 h-3 bg-transparent rounded-full"></span>
                      </span>
                      <div className="flex items-center">
                        <span className="font-medium block mr-3">PayPal</span>
                        {/* Simplified PayPal SVG as a placeholder */}
                        <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="80" height="20" fill="#003087" rx="2"/>
                          <text x="10" y="14" fill="white" fontSize="10" fontWeight="bold">PAYPAL</text>
                        </svg>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Review Order
        return (
          <div className="space-y-6">
            <div className="text-xl font-serif mb-4">Review Your Order</div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-lg">Order Summary</h3>
                <button 
                  className="text-sapphire hover:underline"
                  onClick={() => setCheckoutStep(1)}
                >
                  Edit Cart
                </button>
              </div>
              
              <div className="divide-y divide-slate/10">
                {cartItems.map((item) => {
                  const licenseMultiplier = item.licenseType === 'extended' ? 2.5 : 1;
                  const itemTotal = item.price * licenseMultiplier * item.quantity;
                  
                  return (
                    <div key={item.id} className="py-4 flex items-center">
                      <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="text-sm text-slate">
                          {item.licenseType.charAt(0).toUpperCase() + item.licenseType.slice(1)} License
                          {item.quantity > 1 && ` × ${item.quantity}`}
                        </div>
                      </div>
                      <div className="font-medium">${itemTotal.toFixed(2)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-medium text-lg mb-4">Billing Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate mb-1">Name</div>
                  <div>John Doe</div>
                </div>
                <div>
                  <div className="text-slate mb-1">Email</div>
                  <div>john.doe@example.com</div>
                </div>
                <div>
                  <div className="text-slate mb-1">Address</div>
                  <div>123 Main St, San Francisco, CA 94107, United States</div>
                </div>
                <div>
                  <div className="text-slate mb-1">Payment Method</div>
                  <div className="flex items-center">
                    Credit Card (ending in 4242)
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Secure</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="text-sapphire hover:underline mt-4"
                onClick={() => setCheckoutStep(2)}
              >
                Edit Billing Information
              </button>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
              <div className="text-green-600 mr-3 mt-0.5">
                <Lock size={18} />
              </div>
              <div>
                <div className="font-medium text-green-800 mb-1">Secure Checkout</div>
                <div className="text-sm text-green-700">
                  Your payment information is encrypted and processed securely. We do not store your credit card details.
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {renderCheckoutSteps()}
          </div>
          
          {/* Order Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-serif mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                {appliedPromo?.valid && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="border-t border-b border-slate/10 py-3 mt-3 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              {checkoutStep < 3 ? (
                <button
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={() => setCheckoutStep(prev => Math.min(prev + 1, 3))}
                  disabled={cartItems.length === 0}
                >
                  {checkoutStep === 1 ? 'Proceed to Payment' : 'Review Order'}
                  <ChevronRight size={18} className="ml-2" />
                </button>
              ) : (
                <button
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Lock size={18} className="mr-2" />
                  Complete Purchase
                </button>
              )}
              
              {checkoutStep > 1 && (
                <button
                  className="w-full text-center mt-4 text-slate hover:text-charcoal transition-colors"
                  onClick={() => setCheckoutStep(prev => Math.max(prev - 1, 1))}
                >
                  Back to {checkoutStep === 2 ? 'Cart' : 'Payment'}
                </button>
              )}
              
              <div className="flex items-center justify-center mt-6 text-sm text-slate">
                <Lock size={14} className="mr-2" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage;
