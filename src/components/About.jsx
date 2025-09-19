import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section principale */}
        <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
                <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
                  Les experts du pneu
                </h2>
              </div>
              
              <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Votre pneu a crevé
                impossible de vous
                déplacer ?
              </h1>
              
              <div className="space-y-4 sm:space-y-6 text-gray-300 font-poppins">
                <p className="text-sm sm:text-base md:text-md leading-relaxed">
                  Le plus gros stock de pneus à Paris et dans toute l'Île-de-France, BK PNEUS 
                  SERVICES se déplace directement chez vous où que vous soyez et remplace votre pneu sur 
                  place immédiatement à un tarif compétitif.
                </p>
                
                <p className="text-sm sm:text-base md:text-md leading-relaxed">
                  Besoin d'un dépannage pneu crevé en urgence ? BK Pneus intervient dans toute 
                  l'Île-de-France avec ses camions ateliers, pour une réparation de pneu sur 
                  place, à domicile ou sur votre lieu de travail. Notre équipe se déplace 
                  rapidement, tous les jours, pour vous éviter les contraintes d'un remorquage ou 
                  d'un déplacement en garage.
                </p>
                
                <p className="text-sm sm:text-base md:text-md leading-relaxed">
                  Notre priorité : vous permettre de reprendre la route en toute sécurité, avec un 
                  service rapide, propre et professionnel. Que vous ayez un pneu à plat, un 
                  éclatement ou une simple crevaison lente, nous avons la solution.
                </p>
              </div>
            </div>
            
            {/* Image des pneus */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/about1.png" 
                  alt="Stack de pneus - BK PNEUS" 
                  className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cartes des avantages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Carte Réactivité */}
          <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 text-center hover:bg-gray-900/ transition-all duration-300 hover:scale-105">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img 
                src="/about2.png" 
                alt="Réactivité - Éclair" 
                className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
              />
            </div>
            <h3 className="font-oswald text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Réactivité
            </h3>
            <p className="text-gray-300 font-poppins text-sm sm:text-base leading-relaxed">
              Tous nos devis sont rendus dans l'heure qui suit.
            </p>
          </div>
          
          {/* Carte Qualité */}
          <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 text-center hover:bg-gray-900/ transition-all duration-300 hover:scale-105">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img 
                src="/about3.png" 
                alt="Qualité - Pneu" 
                className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
              />
            </div>
            <h3 className="font-oswald text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Qualité
            </h3>
            <p className="text-gray-300 font-poppins text-sm sm:text-base leading-relaxed">
              Get services like car washes or charging while you park.
            </p>
          </div>
          
          {/* Carte Prix Compétitifs */}
          <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 text-center hover:bg-gray-900/ transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img 
                src="/about4.png" 
                alt="Prix Compétitifs - Euro" 
                className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
              />
            </div>
            <h3 className="font-oswald text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Prix Compétitifs
            </h3>
            <p className="text-gray-300 font-poppins text-sm sm:text-base leading-relaxed">
              Notre rapport qualité/prix est un des meilleurs sur le marché.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}