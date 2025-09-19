import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour vérifier si le lien est actif
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-4 right-4 left-4 md:top-4 md:left-20 md:right-20 z-50">
      <nav className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="BK-PNEUS Logo" className="cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-oswald duration-200 font-meduim ${
                isActiveLink('/') 
                  ? 'text-red-500' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/actus" 
              className={`transition-colors font-oswald duration-200 font-meduim ${
                isActiveLink('/actus') 
                  ? 'text-red-500' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              Actus
            </Link>
            <Link 
              to="/nosphotos" 
              className={`transition-colors font-oswald duration-200 font-meduim ${
                isActiveLink('/nosphotos') 
                  ? 'text-red-500' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              Nos photos
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-oswald duration-200 font-meduim ${
                isActiveLink('/contact') 
                  ? 'text-red-500' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Phone Button Desktop */}
          <div className="hidden md:block">
            <a 
              href="tel:0764466621" 
              className="bg-red-600 hover:bg-red-700 font-oswald font-meduim text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
            >
              <Phone size={18} />
              <span>07 64 46 66 21</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-red-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors font-oswald duration-200 font-meduim py-2 ${
                  isActiveLink('/') 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/actus" 
                className={`transition-colors font-oswald duration-200 font-meduim py-2 ${
                  isActiveLink('/actus') 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Actus
              </Link>
              <Link 
                to="/nosphotos" 
                className={`transition-colors font-oswald duration-200 font-meduim py-2 ${
                  isActiveLink('/nosphotos') 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Nos photos
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-oswald duration-200 font-meduim py-2 ${
                  isActiveLink('/contact') 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
               <a 
                href="tel:0764466621" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 mt-4"
              >
                <Phone size={18} />
                <span>07 64 46 66 21</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}