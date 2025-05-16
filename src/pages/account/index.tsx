import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Download, CreditCard, Heart, Settings, LogOut, ChevronRight, Eye, EyeOff, Key, Mail, Package, Edit2, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

type Purchase = {
  id: string;
  name: string;
  date: string;
  price: number;
  imageUrl: string;
  downloadLink: string;
  licenseKey?: string;
};

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('purchases');
  const [showPassword, setShowPassword] = useState(false);
  
  const recentPurchases: Purchase[] = [
    {
      id: 'ORD-8294',
      name: 'Photography Master Presets',
      date: '2023-09-18',
      price: 49,
      imageUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      downloadLink: '#',
      licenseKey: 'PHOTO-MP-491F-AHFF-4312'
    },
    {
      id: 'ORD-7185',
      name: 'Modern UI Kit Pro',
      date: '2023-08-25',
      price: 79,
      imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      downloadLink: '#',
      licenseKey: 'UI-KIT-81FB-HGGE-9173'
    },
    {
      id: 'ORD-6493',
      name: '3D Icons Collection',
      date: '2023-07-12',
      price: 39,
      imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      downloadLink: '#'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Cinematic LUTs Pack',
      price: 99,
      imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Social Media Toolkit',
      price: 89,
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Content for different tabs
  const renderTabContent = () => {
    switch (activeTab) {
      case 'purchases':
        return (
          <div>
            <h3 className="text-xl font-serif mb-6">Your Purchases</h3>
            
            <div className="space-y-6">
              {recentPurchases.map((purchase) => (
                <div key={purchase.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/4 h-32 md:h-auto">
                      <img 
                        src={purchase.imageUrl} 
                        alt={purchase.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/4 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center mb-1">
                          <h4 className="font-medium">{purchase.name}</h4>
                          <span className="ml-3 px-2 py-1 bg-gray-100 text-slate text-xs rounded-full">
                            Order ID: {purchase.id}
                          </span>
                        </div>
                        <p className="text-slate text-sm mb-2">
                          Purchased on {new Date(purchase.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                        <div className="text-lg font-medium">${purchase.price.toFixed(2)}</div>
                        
                        {purchase.licenseKey && (
                          <div className="mt-2">
                            <div className="text-xs text-slate mb-1">License Key:</div>
                            <div className="font-mono text-sm bg-gray-100 p-2 rounded select-all">{purchase.licenseKey}</div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <a 
                          href={purchase.downloadLink} 
                          className="flex items-center gap-2 btn-primary py-2 px-4"
                        >
                          <Download size={16} />
                          <span>Download</span>
                        </a>
                        <button className="text-slate hover:text-sapphire transition-colors">
                          <Package size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div>
            <h3 className="text-xl font-serif mb-6">Your Wishlist</h3>
            
            {wishlistItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                    <div className="relative h-48">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <span className="text-pearl">${item.price.toFixed(2)}</span>
                        <div className="flex space-x-2">
                          <button className="bg-white text-charcoal rounded-full p-2 hover:bg-sapphire hover:text-pearl transition-colors">
                            <ShoppingCart size={16} />
                          </button>
                          <button className="bg-white text-red-500 rounded-full p-2 hover:bg-red-500 hover:text-white transition-colors">
                            <Heart size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium group-hover:text-sapphire transition-colors">{item.name}</h4>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-lg font-medium">${item.price.toFixed(2)}</span>
                        <Link to={`/products/${item.id}`} className="text-sapphire text-sm font-medium hover:underline">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <Heart size={48} className="mx-auto text-slate/40 mb-4" />
                <h4 className="text-lg font-medium mb-2">Your wishlist is empty</h4>
                <p className="text-slate mb-6">Browse our products and add items to your wishlist.</p>
                <Link to="/products" className="btn-primary">
                  Explore Products
                </Link>
              </div>
            )}
          </div>
        );
      case 'profile':
        return (
          <div>
            <h3 className="text-xl font-serif mb-6">Your Profile</h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 text-center">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-pearl">
                      <img 
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-sapphire text-pearl rounded-full p-2 shadow-md hover:bg-sapphire/90 transition-colors">
                      <Edit2 size={16} />
                    </button>
                  </div>
                  <h4 className="font-medium text-lg mt-4">John Doe</h4>
                  <p className="text-slate text-sm">Member since Jan 2023</p>
                </div>
                
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate mb-1">Full Name</label>
                      <input 
                        type="text" 
                        value="John Doe"
                        className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate mb-1">Email Address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" />
                        <input 
                          type="email" 
                          value="john.doe@example.com"
                          className="w-full pl-10 pr-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                          disabled
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        value="+1 (555) 123-4567"
                        className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate mb-1">Country</label>
                      <select className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-6">Save Changes</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-medium text-lg mb-4">Password & Security</h4>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate mb-1">Current Password</label>
                <div className="relative">
                  <Key size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter current password"
                    className="w-full pl-10 pr-12 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate hover:text-charcoal"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">New Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate mb-1">Confirm New Password</label>
                  <input 
                    type="password" 
                    placeholder="Confirm new password"
                    className="w-full px-4 py-2 border border-slate/20 rounded-lg focus:outline-none focus:border-sapphire"
                  />
                </div>
              </div>
              
              <button className="btn-secondary">Change Password</button>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h3 className="text-xl font-serif mb-6">Account Settings</h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h4 className="font-medium text-lg mb-4">Notification Preferences</h4>
              
              <div className="space-y-4">
                {[
                  { id: 'email-orders', label: 'Order confirmations and updates', checked: true },
                  { id: 'email-products', label: 'New product releases', checked: true },
                  { id: 'email-sales', label: 'Sales and promotions', checked: false },
                  { id: 'email-newsletter', label: 'Weekly newsletter', checked: true }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Bell size={18} className="text-slate mr-3" />
                      <span>{item.label}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                      <div className="w-11 h-6 bg-slate/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sapphire"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h4 className="font-medium text-lg mb-4">Payment Methods</h4>
              
              <div className="border border-slate/20 rounded-lg p-4 mb-4 relative">
                <div className="flex items-center">
                  <div className="bg-slate/10 rounded-md p-2 mr-4">
                    <CreditCard size={24} className="text-slate" />
                  </div>
                  <div>
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-sm text-slate">Expires 05/2025</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Default</span>
                </div>
              </div>
              
              <button className="btn-secondary">Add Payment Method</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-medium text-lg mb-4">Account Actions</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate/10">
                  <div className="flex items-center">
                    <Download size={18} className="text-slate mr-3" />
                    <span>Download account data</span>
                  </div>
                  <button className="text-sapphire hover:text-sapphire/80 transition-colors">
                    Request
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-slate/10">
                  <div className="flex items-center">
                    <User size={18} className="text-slate mr-3" />
                    <span>Deactivate account</span>
                  </div>
                  <button className="text-amber hover:text-amber/80 transition-colors">
                    Deactivate
                  </button>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <LogOut size={18} className="text-red-500 mr-3" />
                    <span className="text-red-500">Delete account permanently</span>
                  </div>
                  <button className="text-red-500 hover:text-red-600 transition-colors">
                    Delete
                  </button>
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
    <div className="min-h-screen pt-24 pb-16 bg-pearl/50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-slate/10">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-slate">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                {[
                  { id: 'purchases', label: 'My Purchases', icon: <Download size={18} /> },
                  { id: 'wishlist', label: 'Wishlist', icon: <Heart size={18} /> },
                  { id: 'profile', label: 'Profile', icon: <User size={18} /> },
                  { id: 'settings', label: 'Settings', icon: <Settings size={18} /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? 'bg-sapphire/10 text-sapphire' 
                        : 'hover:bg-slate/5 text-charcoal'
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className={activeTab === item.id ? 'text-sapphire' : 'text-slate'}>{item.icon}</span>
                    <span>{item.label}</span>
                    {activeTab === item.id && (
                      <ChevronRight size={16} className="ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
              
              <div className="p-4 border-t border-slate/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ShoppingCart = ({ size, className }: { size: number, className?: string }) => (
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
    <circle cx="8" cy="21" r="1"></circle>
    <circle cx="19" cy="21" r="1"></circle>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
  </svg>
);

export default AccountPage;