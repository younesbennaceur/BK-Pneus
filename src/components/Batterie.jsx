import React from 'react';
import { Calendar } from 'lucide-react';

export default function Batterie() {
  return (
    <div className="min-h-screen flex items-center bg-gray-100 py-12 sm:py-12 md:py-12 px-4 sm:px-8 md:px-12 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Container principal avec bordure */}
        <div className="bg-white border-2 border-gray-200 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Contenu texte */}
            <div>
              <div className="flex items-center  ">
                <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
                <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
                  Dépannage Batterie Paris IDF
                </h2>
              </div>
              
              <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-4 leading-tight">
                Votre batterie est en panne<br />
                BK Services se déplace
              </h1>
              
              <div className="space-y-1 sm:space-y-1 text-gray-700 font-poppins">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Votre voiture ne démarre plus ? La batterie est en panne ?
                </p>
                
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  BK Services se déplace dans tout Paris et sa banlieue 
                  pour vous dépanner. Recharge de batterie rapide
                </p>
              </div>
            </div>
            
            {/* Section image avec carte flottante */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="/batterie.png" 
                  alt="Dépannage batterie de voiture" 
                  className="w-full h-48 sm:h-62 md:h-96 object-cover"
                />
                
                {/* Overlay gradiant */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Carte flottante */}
                <div className="absolute bottom-4 sm:bottom-0 left-4 sm:left-0 right-4 sm:right-6">
                  <div className="bg-white backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                    <h3 className="font-oswald text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Dépannage Batterie
                    </h3>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-poppins font-medium text-sm sm:text-base w-full sm:w-auto justify-center">
                      <Calendar size={16} className="sm:w-5 sm:h-5" />
                      <span>Prendre RDV</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}