import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Logique d'envoi du formulaire
    console.log('Formulaire envoyé:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Image de pneu en arrière-plan */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-30">
        <img 
          src="/rond.png" 
          alt="Pneu" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Contenu principal */}
      <div className="px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Formulaire de contact */}
          <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl p-8">
            
            {/* En-tête */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-red-500 text-lg mr-2">★</span>
                <span className="text-red-500 text-sm font-medium uppercase tracking-wide">
                  Besoin d'une intervention ?
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">
                Remplissez ce formulaire, nous
              </h1>
              <h2 className="text-3xl font-bold">
                <span className="text-white">vous rappelons </span>
                <span className="text-red-500">dans l'heure</span>
              </h2>
            </div>

            {/* Champs du formulaire */}
            <div className="space-y-6">
              
              {/* Nom complet */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Ronald Richards"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ronald.richards@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+33 1 23 45 67 89"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="montage">Montage de pneus</option>
                  <option value="reparation">Réparation de pneus</option>
                  <option value="depannage">Dépannage d'urgence</option>
                  <option value="equilibrage">Équilibrage</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Décrivez votre panne
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez vos besoins, votre projet ou vos idées..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300  shadow-lg"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}