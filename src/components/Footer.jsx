import React from 'react';
import { Phone, MapPin, Mail, Clock, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 sm:py-16 md:py-12 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/footer.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Section principale */}
        <div className="text-center mb-6 sm:mb-6 md:mb-6">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <img 
              src="/logo.png" 
              alt="BK-PNEUS - Dépannage & Assistance 24/24" 
              className="h-16 sm:h-20 md:h-24 mx-auto"
            />
          </div>
          
          {/* Description */}
          <p className="font-poppins text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-6 md:mb-6 leading-relaxed">
            BK PNEUS votre expert dépannage pneus. Nos équipes se déplacent partout à Paris 
            et en Île-de-France pour vous dépanner et remplacer vos pneus.
          </p>
          
          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-8">
            <a 
              href="tel:0764466621"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 transition-all duration-300 font-poppins font-semibold text-base sm:text-lg shadow-2xl hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              <span>Appel urgence</span>
            </a>
            
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 transition-all duration-300 font-poppins font-semibold text-base sm:text-lg hover:scale-105 w-full sm:w-auto justify-center">
              <Calendar size={18} className="sm:w-5 sm:h-5" />
              <span>Prendre RDV</span>
            </button>
          </div>
        </div>
        
        {/* Informations de contact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 mb-6 sm:mb-6">
          
          {/* Téléphone */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Phone size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-oswald text-lg sm:text-xl font-bold text-white mb-2">
              0764466621
            </h3>
            <p className="font-poppins text-sm sm:text-base text-red-500 font-medium">
              Devis Gratuit
            </p>
          </div>
          
          {/* Adresse */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-oswald text-lg sm:text-xl font-bold text-white mb-2">
              179 avenue Aristide Briand
            </h3>
            <p className="font-poppins text-sm sm:text-base text-red-500 font-medium">
              93190 Livry Gargan
            </p>
          </div>
          
          {/* Email */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Mail size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-oswald text-lg sm:text-xl font-bold text-white mb-2">
              contact@bkpneus.fr
            </h3>
            <p className="font-poppins text-sm sm:text-base text-red-500 font-medium">
              bkpneus@hotmail.com
            </p>
          </div>
          
          {/* Horaires */}
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Clock size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-oswald text-lg sm:text-xl font-bold text-white mb-2">
              Nos horaires
            </h3>
            <p className="font-poppins text-sm sm:text-base text-red-500 font-medium">
              7/7 24/24
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-6">
          <a href="/" className="font-poppins text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
            Accueil
          </a>
          <span className="text-gray-600 hidden sm:block">|</span>
          <a href="/actus" className="font-poppins text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
            Actus
          </a>
          <span className="text-gray-600 hidden sm:block">|</span>
          <a href="/nosphotos" className="font-poppins text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
            Nos photos
          </a>
          <span className="text-gray-600 hidden sm:block">|</span>
          <a href="/contact" className="font-poppins text-base sm:text-lg text-gray-400 hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>
        
        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-6">
          <a 
            href="#" 
            className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="#" 
            className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base text-gray-500">
          <p className="font-poppins mb-4 sm:mb-0">
            © 2025 OurBlog. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}