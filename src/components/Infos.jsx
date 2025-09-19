import React from 'react';

export default function Infos() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        
        {/* Section 1 - Service de dépannage professionnel */}
        <div className="relative rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40">
            <img 
              src="/service2.jpg" 
              alt="Pneus sur route" 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          
          {/* Contenu */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="">
              
              {/* Texte principal */}
              <div className=" w-full text-white">
                <h1 className="font-poppins text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                  Un service de dépannage professionnel en Île-de-France
                </h1>
                
                <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  BK Pneus propose un service de dépannage complet, adapté aux urgences comme aux entretiens préventifs :
                </p>
                
                {/* Liste des services */}
                <div className="space-y-1 sm:space-y-1">
                  {[
                    "Réparation de pneu crevé sur place ou à domicile",
                    "Changement de pneu si le pneu n'est pas réparable", 
                    "Gonflage, remontage et équilibrage des pneus",
                    "Remplacement de pneus saisonniers (été / hiver)",
                    "Contrôle de l'état et de la pression des pneus"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 sm:mt-2.5 flex-shrink-0"></div>
                      <p className="font-poppins text-sm sm:text-base md:text-lg text-white leading-relaxed">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
        
        {/* Section 2 - Camions ateliers */}
        <div className="bg-white rounded-3xl sm:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Contenu texte */}
            <div>
              <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Des camions ateliers parfaitement équipés
              </h2>
              
              <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Chaque véhicule BK Pneus fonctionne comme un atelier mobile : machines à démonter, compresseurs, 
                équilibreuses électroniques, palette de réparation, pneus neufs en stock... Tout est prévu pour intervenir en 
                autonomie, dans les meilleures conditions, même dans les parkings souterrains
              </p>
            </div>
            
            {/* Image du camion */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/camion.png" 
                alt="Camion atelier BK Pneus" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}