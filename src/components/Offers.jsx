import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

export default function Offers() {
  const offers = [
    {
      id: 1,
      size: "14\" à 16\"",
      price: "17,95€",
      duration: "15 min"
    },
    {
      id: 2,
      size: "17\" à 18\"",
      price: "18,95€",
      duration: "15 min"
    },
    {
      id: 3,
      size: "19\" et +",
      price: "Sur devis",
      duration: "20 min"
    }
  ];

  const services = [
    "Valve",
    "Montage", 
    "Équilibrage"
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Image de fond */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/bg.svg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bande rouge supérieure */}
      <div className="bg-red-600 h-2 relative z-10"></div>
      
      {/* Contenu principal */}
      <div className="px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Section gauche - Description */}
            <div>
              {/* En-tête */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <span className="text-red-500 text-lg mr-2">★</span>
                  <span className="text-red-500 text-sm font-medium uppercase tracking-wide">
                    Nos Tarifs Montage Pneus
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">
                  Intervention Complète
                </h1>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Prix fixes, pas de surprise.
                  </h2>
                  <p className="text-xl text-white mb-4">
                    Devis gratuit avant intervention
                  </p>
                  <p className="text-gray-300 text-sm mb-6">
                    Le spécialiste du pneu qui vient à vous :
                  </p>
                </div>
                
                {/* Liste des services */}
                <div className="mb-8">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center mb-3">
                      <span className="text-red-500 text-lg mr-3">★</span>
                      <span className="text-white text-lg">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">À Savoir</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tarifs hors frais de déplacement variables<br/>
                    selon distance et choix de votre pneu
                  </p>
                </div>
              </div>
            </div>

            {/* Section droite - Cartes de tarifs en row */}
            <div className="space-y-6">
              {offers.map((offer) => (
                <div 
                  key={offer.id}
                  className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl  bo  p-6  hover:bg-balck/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {offer.size}
                    </h3>
                    <div className="text-right">
                      <p className="text-white text-lg">
                        A partir de <span className="text-2xl font-bold">{offer.price}</span>
                      </p>
                      <div className="flex items-center justify-end text-gray-400 text-sm mt-1">
                        <Clock size={14} className="mr-1" />
                        <span>{offer.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300  flex items-center justify-center space-x-2 group">
                    <span>Réserver</span>
                    <ArrowRight 
                      size={18} 
                      className="transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}