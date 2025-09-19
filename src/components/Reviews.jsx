import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Un pneu crevé en pleine nuit à Bobigny, j'ai appelé un camion BK Services qui est intervenu dans l'heure pour me changer les pneus",
      author: "Jérémy Z",
      role: "Client"
    },
    {
      id: 2,
      text: "Service très professionnel et rapide. L'équipe BK Services m'a dépanné un dimanche matin, je recommande vivement leurs services.",
      author: "Sophie M",
      role: "Client"
    },
    {
      id: 3,
      text: "Intervention rapide et efficace. Prix correct et technicien très compétent. Merci à toute l'équipe BK Services !",
      author: "David L",
      role: "Client"
    },
    {
      id: 4,
      text: "Batterie à plat sur l'autoroute, ils sont venus en moins de 30 minutes. Service impeccable, je garde leur numéro !",
      author: "Marie C",
      role: "Client"
    },
    {
      id: 5,
      text: "Dépannage pneu à 2h du matin, service 24h/24 vraiment au top. Technicien souriant et professionnel malgré l'heure tardive.",
      author: "Thomas R",
      role: "Client"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Image décorative en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[500px] h-32 sm:h-40 md:h-48 lg:h-60 opacity-10">
        <img 
          src="/tire_track.png" 
          alt="Traces de pneu" 
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
              <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
                Témoignages
              </h2>
            </div>
            
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ce que nos clients disent de nous
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden sm:flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Grille des témoignages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div 
              key={`${testimonial.id}-${currentSlide}`}
              className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 sm:p-8 hover:bg-gray-900/ transition-all duration-300 hover:scale-105 relative"
            >
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl text-gray-600 font-serif">
                "
              </div>
              
              {/* Contenu du témoignage */}
              <div className="mb-6 sm:mb-8">
                <p className="font-poppins text-sm sm:text-base md:text-lg text-white leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
              
              {/* Auteur */}
              <div className="border-t border-gray-700 pt-4 sm:pt-6">
                <h3 className="font-oswald text-lg sm:text-xl font-bold text-red-500 mb-1">
                  {testimonial.author}
                </h3>
                <p className="font-poppins text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation mobile */}
        <div className="flex justify-center items-center mt-8 sm:mt-12 space-x-4 sm:hidden">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Indicateurs de slides */}
          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
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
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}