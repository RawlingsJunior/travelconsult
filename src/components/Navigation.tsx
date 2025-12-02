import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
            <span className="text-white text-xl font-bold">Adventurist</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/contact', label: 'Contact Us' },
              { path: '/packages', label: 'Packages' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path) ? 'text-white font-semibold' : 'text-gray-200 hover:text-white'} transition-all duration-300 hover:-translate-y-0.5 relative group`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Book Now
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white transition-transform duration-300 hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg p-4 space-y-2 animate-slide-in border border-gray-800">
            <Link to="/" className="block text-white py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors">Home</Link>
            <Link to="/about" className="block text-white py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors">About Us</Link>
            <Link to="/services" className="block text-white py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors">Services</Link>
            <Link to="/contact" className="block text-white py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors">Contact Us</Link>
            <Link to="/packages" className="block text-white py-2 px-4 hover:bg-gray-800 rounded-lg transition-colors">Packages</Link>
            <button className="w-full bg-orange-500 text-white py-2 rounded-full mt-4 hover:bg-orange-600 transition-colors">Book Now</button>
          </div>
        )}
      </div>
    </nav>
  );
}
