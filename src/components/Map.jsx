import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, X } from 'lucide-react';

export default function MapAccordion() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const mapRefs = useRef({});
  const [maps, setMaps] = useState({});

  const locations = [
    {
      id: 1,
      number: "01",
      name: "PARIS (75)",
      subtitle: "Centre de Paris - Intervention complète du département",
      isNew: false,
      coordinates: { lat: 48.8566, lng: 2.3522 },
    },
    {
      id: 2,
      number: "02", 
      name: "SEINE-SAINT-DENIS (93)",
      subtitle: "Centre de Livry-Gargan (93) - Ouverture complète du département",
      isNew: true,
      coordinates: { lat: 48.8838, lng: 2.5344 },
    },
    {
      id: 3,
      number: "03",
      name: "SEINE-ET-MARNE (77)",
      subtitle: "Centre de Chelles - Intervention complète du département", 
      isNew: false,
      coordinates: { lat: 48.8473, lng: 2.6342 },
    },
    {
      id: 4,
      number: "04",
      name: "VAL-DE-MARNE (94)",
      subtitle: "Centre de Créteil - Intervention complète du département",
      isNew: false,
      coordinates: { lat: 48.7909, lng: 2.4553 },
    },
    {
      id: 5,
      number: "05",
      name: "HAUTS-DE-SEINE (92)",
      subtitle: "Centre de Levallois - Intervention complète du département",
      isNew: false,
      coordinates: { lat: 48.8924, lng: 2.2307 },
    }
  ];

  // Initialiser une carte pour une localisation spécifique
  const initMap = (locationId) => {
    const location = locations.find(loc => loc.id === locationId);
    const mapContainer = mapRefs.current[locationId];
    
    if (window.L && mapContainer && location && !maps[locationId]) {
      // Créer la carte
      const mapInstance = window.L.map(mapContainer, {
        center: [location.coordinates.lat, location.coordinates.lng],
        zoom: 12,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false
      });

      // Ajouter les tuiles OpenStreetMap
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ''
      }).addTo(mapInstance);

      // Créer l'icône personnalisée
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            width: 30px; 
            height: 30px; 
            border-radius: 50%; 
            background: #dc2626; 
            border: 3px solid white; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-weight: bold; 
            color: white; 
            font-size: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            ${location.number}
          </div>
        `,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      // Ajouter le marqueur
      window.L.marker([location.coordinates.lat, location.coordinates.lng], {
        icon: customIcon
      }).addTo(mapInstance);

      setMaps(prev => ({
        ...prev,
        [locationId]: mapInstance
      }));
    }
  };

  // Charger Leaflet au montage du composant
  useEffect(() => {
    if (!window.L) {
      // Charger CSS Leaflet
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Charger JS Leaflet
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      document.head.appendChild(script);
    }
  }, []);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
      // Initialiser la carte après un petit délai pour s'assurer que le DOM est prêt
      setTimeout(() => {
        initMap(id);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-start mb-2">
            <span className="text-red-500 text-xl mr-2">★</span>
            <span className="text-red-500 text-xl font-medium">
              Nos Zones d'intervention en Île-de-France
            </span>
          </div>
          
         
          
          
        </div>

        {/* Liste des départements */}
        <div className="space-y-1">
          {locations.map((location) => (
            <div key={location.id} className="space-y-4">
              
              {/* En-tête de l'accordéon */}
              <div 
                className={`${
                  openAccordion === location.id 
                    ? 'backdrop-blur-md bg-black/30 border  rounded-3xl border-red-500' 
                    : ' backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl'
                } border rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all duration-300`}
                onClick={() => toggleAccordion(location.id)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 font-bold text-2xl">{location.number}</span>
                  <div>
                    <h3 className="font-bold text-white text-2xl">{location.name}</h3>
                    <p className="text-gray-400 text-xs mt-1">{location.subtitle}</p>
                  </div>
                </div>
                
                <div className={`w-8 h-8 ${
                  openAccordion === location.id ? 'bg-red-500' : 'bg-gray-700'
                } rounded-full flex items-center justify-center transition-transform duration-300 ${
                  openAccordion === location.id ? 'rotate-90' : ''
                }`}>
                  <ChevronRight size={16} className={`${
                    openAccordion === location.id ? 'text-white' : 'text-gray-300'
                  } transition-transform duration-300 ${openAccordion === location.id ? 'rotate-90' : ''}`} />
                </div>
              </div>

              {/* Contenu de l'accordéon - Mini carte */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openAccordion === location.id ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="mt-1">
                  <div className="relative rounded-lg overflow-hidden h-64 border border-gray-800">
                    <div 
                      ref={el => mapRefs.current[location.id] = el}
                      className="w-full h-full"
                    />
                    {/* Message de chargement */}
                    {!maps[location.id] && openAccordion === location.id && (
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white">
                        <div className="text-center">
                          <p className="text-sm">Chargement de la carte...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}