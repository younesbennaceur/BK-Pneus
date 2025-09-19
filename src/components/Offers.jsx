import React from 'react';
import { Check, Clock, ArrowRight } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      id: 1,
      size: "14 à 16\"",
      price: "17.95€*",
      services: ["Montage", "Equilibrage", "Valve"],
      duration: "15 min"
    },
    {
      id: 2,
      size: "14 à 16\"",
      price: "17.95€*",
      services: ["Montage", "Equilibrage", "Valve"],
      duration: "15 min"
    },
    {
      id: 3,
      size: "+ 19\"",
      price: "20.50€*",
      services: ["Montage", "Equilibrage", "Valve"],
      duration: "15 min"
    }
    
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Section rouge supérieure */}
      <div className="bg-red-600 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* En-tête */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <span className="text-white text-xl sm:text-2xl mr-3">★</span>
            <h2 className="text-white font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
              Nos Tarifs
            </h2>
          </div>
          
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Montage Pneus
          </h1>
          
          <p className="font-poppins text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Tous nos pneumatiques proviennent des meilleures marques sur le marché. Nos 
            partenaires nous permettent de répondre à votre demande rapidement.
          </p>
        </div>
      </div>

      {/* Section noire avec les cartes tarifs */}
      <div className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 relative">
        {/* Image de pneu en arrière-plan */}
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[400px] opacity-10">
          <img 
            src="/offers_tire.png" 
            alt="Pneu décoratif" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Grille des offres */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offers.map((offer) => (
              <div 
                key={offer.id}
                className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 hover:bg-gray-900/ transition-all duration-300 hover:scale-105"
              >
                {/* Taille des pneus */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
                    {offer.size}
                  </h3>
                  <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-300">
                    A partir de <span className="text-white font-semibold">{offer.price}</span>
                  </p>
                </div>

                {/* Liste des services */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {offer.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white sm:w-4 sm:h-4" />
                      </div>
                      <span className="font-poppins text-base sm:text-lg text-white font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Durée */}
                <div className="flex items-center justify-center space-x-2 mb-6 sm:mb-8 text-gray-300">
                  <Clock size={18} className="sm:w-5 sm:h-5" />
                  <span className="font-poppins text-sm sm:text-base">{offer.duration}</span>
                </div>

                {/* Bouton Réserver */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-poppins font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                  <span>Réserver</span>
                  <ArrowRight 
                    size={18} 
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:w-5 sm:h-5" 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}