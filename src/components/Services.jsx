import React, { useState } from 'react';
import { Phone, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInfoSlide, setCurrentInfoSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Dépannage Pneus",
      description: "Le spécialiste du pneu qui vient à vous :",
      image: "/Service1.png",
      features: [
        "Réparation sur place",
        "Changement de pneu", 
        "Équilibrage électronique",
        "Pneus saisonniers",
        "Diagnostic et contrôle pression"
      ]
    },
    {
      id: 2,
      title: "Dépannage Batteries",
      description: "Votre voiture ne démarre plus ? On arrive !",
      image: "/service3.jpg",
      features: [
        "Diagnostic batterie complet",
        "Recharge rapide sur place",
        "Remplacement batterie",
        "Test alternateur",
        "Démarrage d'urgence"
      ]
    }
  ];

  const infoSlides = [
    {
      id: 1,
      title: "Camions-ateliers équipés",
      subtitle: "Machines, compresseurs, équilibreuses embarquées",
      image: "/camion.png"
    },
    {
      id: 2,
      title: "Stock permanent",
      subtitle: "Pneus neufs + batteries toutes marques disponibles",
      image: "/service2.jpg"
    },
    {
      id: 3,
      title: "Sans remorquage",
      subtitle: "Intervention directe sur place, où que vous soyez",
      image: "/rmrk.jpg"
    },
    {
      id: 4,
      title: "Service professionnel",
      subtitle: "Particuliers, entreprises, flottes, VTC",
      image: "/blog3.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev + 1) % infoSlides.length);
  };

  const prevInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev - 1 + infoSlides.length) % infoSlides.length);
  };

  return (
    <div className="min-h-screen flex-col space-y-8 bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
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
                  className="w-full h-64 sm:h-80 md:h-96 object-cover transition-all duration-500"
                />
                
                {/* Overlay gradiant */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1 className='font-poppins text-xl sm:text-2xl md:text-2xl font-bold text-white mb-4 sm:mb-6 leading-tight'>
                  {services[currentSlide].title}
                </h1>
                <h3 className="font-poppins text-xl sm:text-md md:text-md font-light text-white mb-4 sm:mb-6 leading-tight">
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
                <a 
                href="tel:0652693293"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 font-poppins font-semibold text-base sm:text-lg shadow-2xl hover:scale-105 w-full sm:w-auto"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                <span className="font-oswald">Appel urgence</span>
              </a>
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

      {/* Deuxième section - Services interactifs */}
      <div className='max-w-7xl mx-auto'>
        <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16">
          
          {/* En-tête de la deuxième section */}
          

          {/* Section principale en flex row */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            
            {/* Contenu texte et navigation à gauche */}
            <div className="flex-1 space-y-6 sm:space-y-8">
              
              
              <div>
                 <div className="flex items-center  mb-4 sm:mb-6">
              <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
              <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
                Pourquoi choisir BK Pneus ?
              </h2>
            </div>
                <h1 className="font-poppins text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {infoSlides[currentInfoSlide].title}
                </h1>
                
                <p className="text-gray-300 font-poppins text-lg sm:text-xl md:text-2xl mb-6">
                  {infoSlides[currentInfoSlide].subtitle}
                </p>
              </div>
              
              {/* Navigation du slider info */}
              <div className="flex justify-start items-center space-x-4">
                <button
                  onClick={prevInfoSlide}
                  className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                
                {/* Indicateurs de slides */}
                <div className="flex space-x-2">
                  {infoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInfoSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentInfoSlide 
                          ? 'bg-red-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextInfoSlide}
                  className="w-12 sm:w-14 h-12 sm:h-14 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

             
            </div>

            {/* Image à droite */}
            <div className="flex-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img 
                  src={infoSlides[currentInfoSlide].image}
                  alt={infoSlides[currentInfoSlide].title}
                  className="w-full h-64 sm:h-80 md:h-80 object-cover transition-all duration-500"
                />
                
                {/* Overlay gradiant */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}