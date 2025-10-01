import React from 'react';
import { Phone, Clock, Gauge  } from 'lucide-react';


export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* CSS pour l'animation du slider */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black/75"></div>

      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-48 h-full w-full flex">
        <div className="relative z-20 h-full flex items-center justify-center w-full">
          <div className="text-white  mx-auto w-full">
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center bg-white/10 backdrop-blur-sm  text-white border border-[#EB222B]/30 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Gauge size={18} className="sm:w-4 text-[#EB222B] sm:h-4" />
                <span className="font-poppins text-xs sm:text-sm font-light tracking-wide ">
                  Intervention en 30min
                </span>
              </div>
              <div className=" flex space-x-2 items-center  bg-white/10 backdrop-blur-sm  text-white border border-[#EB222B]/30 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6">
                <Clock size={18} className="sm:w-4 text-[#EB222B] sm:h-4" />
                <span className="font-poppins text-xs sm:text-sm font-light tracking-wide ">
                  Disponible 24h/24 - 7j/7
                </span>
              </div>
            </div>

            <h1 className="font-oswald text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase text-white mb-4 sm:mb-6 leading-tight">
              Dépannage pneu crevé à <br className="hidden sm:block" />
              <span className="text-red-500">Bondy</span> et Île-de-France
            </h1>

            <p className="font-poppins text-base sm:text-lg md:text-lg text-gray-200 max-w-4xl mb-6 sm:mb-8 leading-relaxed">
              BK-PNEUS Dépannage & Assistance intervient à votre domicile, au
              bureau et n'importe où dans l'Île-de-France pour réparer ou
              changer vos pneus crevés 7/7 et 24/24
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="tel:0652693293"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 font-poppins font-semibold text-base sm:text-lg shadow-2xl hover:scale-105 w-full sm:w-auto"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                <span className="font-oswald">Appel urgence</span>
              </a>

              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 py-2 sm:py-2 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 font-poppins font-semibold text-base sm:text-lg hover:scale-105 w-full sm:w-auto">
                <Clock size={18} className="sm:w-5 sm:h-5" />
                <span className="font-oswald">Prendre RDV</span>
              </button>
            </div>

            {/* Slider Partenaires */}
            <div className="hidden md:block mt-6 sm:mt-6 md:mt-6">
              <div className="relative overflow-hidden">
                <div className="flex animate-slide space-x-8 sm:space-x-12 md:space-x-16">
                  {/* Premier set de logos */}
                  <div className="flex space-x-8 sm:space-x-12 md:space-x-16 flex-shrink-0">
                    <img
                      src="/logo1.png"
                      alt="Partenaire 1"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo2.png"
                      alt="Partenaire 2"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo3.png"
                      alt="Partenaire 3"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo4.png"
                      alt="Partenaire 4"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  {/* Duplication pour effet infini */}
                  <div className="flex space-x-8 sm:space-x-12 md:space-x-16 flex-shrink-0">
                    <img
                      src="/logo1.png"
                      alt="Partenaire 1"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo2.png"
                      alt="Partenaire 2"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo3.png"
                      alt="Partenaire 3"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                    <img
                      src="/logo4.png"
                      alt="Partenaire 4"
                      className="h-12 sm:h-16 md:h-20 w-auto opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}