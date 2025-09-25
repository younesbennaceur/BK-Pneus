import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Tous les pneus sont-ils réparables ?",
      answer: "Non, tous les pneus ne sont pas réparables. La réparation dépend de plusieurs facteurs comme l'emplacement de la crevaison, sa taille, l'âge du pneu et son état général. Les crevaisons sur les flancs ne sont généralement pas réparables pour des raisons de sécurité."
    },
    {
      id: 2,
      question: "Avez-vous tous les pneus en stock ?",
      answer: "Nos trois centres sont la logistique locale avec centre à plus grande. SSC pour tous vos besoins spéciaux et nos partenaires locaux. Un stock à grande couverture sont de tous centres, soit des transporteurs des ce stock."
    },
    {
      id: 3,
      question: "Comment sont calculés les frais de déplacement ?",
      answer: "Les frais de déplacement sont calculés en fonction de la distance entre notre centre le plus proche et votre localisation. Un tarif kilométrique fixe est appliqué, avec souvent une zone de gratuité autour de nos centres principaux."
    },
    {
      id: 4,
      question: "VAL-DE-MARNE (94)",
      answer: "Notre centre du Val-de-Marne couvre tout le département 94. Nous intervenons dans toutes les communes avec des délais d'intervention optimisés selon votre localisation."
    },
    {
      id: 5,
      question: "HAUTS-DE-SEINE (92)",
      answer: "Notre centre des Hauts-de-Seine dessert l'ensemble du département 92. Service disponible 24h/24 et 7j/7 avec intervention rapide sur tout le territoire."
    }
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Image de fond en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-40">
        <img 
          src="/bg.svg" 
          alt="Background" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      
      {/* Contenu principal */}
      <div className="px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
           <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-start mb-2">
            <span className="text-red-500 text-xl mr-2">★</span>
            <span className="text-red-500 text-xl font-medium">
             Questions Fréquentes
            </span>
          </div>
          
         
          <div>
             <h1 className="text-right text-2xl font-bold text-white mb-1">
             Tout ce que vous devez savoir
          </h1>
            <h2 className=" text-2xl font-bold">
            <span className="text-white">sur nos services de dépannage </span>
           
          </h2>

          </div>
          
        </div>
         

          {/* Liste des FAQ */}
          <div className="space-y-1">
            {faqs.map((faq) => (
              <div key={faq.id} className="space-y-8">
                
                {/* Question - En-tête de l'accordéon */}
                <div 
                  className={`${
                    openAccordion === faq.id 
                      ? 'backdrop-blur-md bg-black/30 border  rounded-3xl border-red-500' 
                      : 'backdrop-blur-md bg-black/30 border  border-white/20 rounded-3xl'
                  } border rounded-lg p-6 flex items-center justify-between cursor-pointer transition-all duration-300`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <h3 className="font-bold text-white text-lg pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className={`w-8 h-8 ${
                    openAccordion === faq.id ? 'bg-red-500' : 'bg-gray-700'
                  } rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0`}>
                    <ChevronRight 
                      size={16} 
                      className={`${
                        openAccordion === faq.id ? 'text-white rotate-90' : 'text-gray-300'
                      } transition-all duration-300`} 
                    />
                  </div>
                </div>

                {/* Réponse - Contenu de l'accordéon */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openAccordion === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-6 mt-1">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}