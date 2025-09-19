import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Dépannage & Assistance",
      description: "Dépannage pneu crevé à Paris et banlieue. BK PNEUS se déplace pour changer vos pneus",
      image: "/Service1.png",
      features: [
        "Déplacement",
        "Montage", 
        "Equilibrage",
        "Remplacement valve"
      ]
    },
    {
      id: 2,
      title: "Vente & Installation",
      description: "Large gamme de pneus neufs et d'occasion. Installation professionnelle sur place",
      image: "/service2.jpg",
      features: [
        "Conseil personnalisé",
        "Pneus toutes marques",
        "Installation rapide",
        "Garantie qualité"
      ]
    },
    {
      id: 3,
      title: "Maintenance Préventive",
      description: "Contrôle et maintenance de vos pneus pour prolonger leur durée de vie",
      image: "/service3.jpg",
      features: [
        "Contrôle pression",
        "Rotation des pneus",
        "Diagnostic usure",
        "Conseils entretien"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Container principal avec bordure arrondie */}
        <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16">
          
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center text-center justify-center mb-4 sm:mb-6">
              <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
              <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
                Nos Services
              </h2>
            </div>
            
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Le spécialiste du pneu
            </h1>
            
            <div className="text-gray-300 font-poppins text-sm sm:text-base md:text-lg max-w-4xl mx-auto space-y-2">
              <p>Dépannage & Assistance - Achats & Ventes - Service Poids lourds</p>
              <p className="font-semibold">BK PNEUS SERVICE - Votre partenaire de confiance</p>
            </div>
          </div>

          {/* Section principale avec slider */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Image et carte de service */}
            <div className="relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img 
                  src={services[currentSlide].image}
                  alt={services[currentSlide].title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                
                {/* Overlay gradiant */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Carte flottante */}
                <div className="absolute bottom-4 sm:bottom-0 left-4 sm:left-0 right-4 sm:right-32">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
                    <h3 className="font-oswald text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {services[currentSlide].title}
                    </h3>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200 font-poppins font-medium text-sm sm:text-base">
                      <Calendar size={16} className="sm:w-5 sm:h-5" />
                      <span>Prendre RDV</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-poppins text-xl sm:text-2xl md:text-2xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {services[currentSlide].description}
                </h3>
              </div>

              {/* Liste des caractéristiques */}
              <div className="space-y-3 sm:space-y-4">
                {services[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <span className="text-red-500 text-lg sm:text-xl">★</span>
                    <span className="font-poppins text-gray-300 text-base sm:text-lg md:text-xl ">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation du slider */}
          <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Indicateurs de slides */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}