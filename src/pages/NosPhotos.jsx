import React, { useState } from 'react';
import { Play, X, Image } from 'lucide-react';

export default function NosPhotos() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      id: 1,
      src: "/Service1.png",
      alt: "Montage de pneu en cours",
      title: "Montage professionnel"
    },
    {
      id: 2,
      src: "/photo2.jpg",
      alt: "Équipement de montage",
      title: "Équipement moderne"
    },
    {
      id: 3,
      src: "/photo3.jpg",
      alt: "Intervention sur site",
      title: "Intervention à domicile"
    },
    {
      id: 4,
      src: "/photo4.jpg",
      alt: "Réparation de pneu",
      title: "Réparation express"
    },
    {
      id: 5,
      src: "/photo5.jpg",
      alt: "Stock de pneus",
      title: "Large gamme de pneus"
    },
    {
      id: 6,
      src: "/photo6.jpg",
      alt: "Équilibrage des roues",
      title: "Équilibrage précis"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: "/video1-thumb.jpg",
      src: "/video1.mp4",
      title: "Processus de montage",
      duration: "2:30"
    },
    {
      id: 2,
      thumbnail: "/video2-thumb.jpg",
      src: "/video2.mp4",
      title: "Intervention d'urgence",
      duration: "1:45"
    },
    {
      id: 3,
      thumbnail: "/video3-thumb.jpg",
      src: "/video3.mp4",
      title: "Réparation rapide",
      duration: "3:15"
    },
    {
      id: 4,
      thumbnail: "/video4-thumb.jpg",
      src: "/video4.mp4",
      title: "Équilibrage professionnel",
      duration: "2:00"
    }
  ];

  const openModal = (media, type) => {
    setSelectedMedia({ ...media, type });
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="py-24 min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Image de fond */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/bg.svg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Contenu principal */}
      <div className="px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <span className="text-red-500 text-lg mr-2">★</span>
              <span className="text-red-500 text-sm font-medium uppercase tracking-wide">
                Nos Réalisations
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Galerie Photos & Vidéos
            </h1>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Découvrez nos interventions et notre savoir-faire à travers 
              nos photos et vidéos de montage, réparation et dépannage de pneus.
            </p>
          </div>

          {/* Navigation par onglets */}
          <div className="flex justify-center mb-12">
            <div className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl p-2 flex">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'photos' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Image size={18} />
                <span>Photos</span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'videos' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Play size={18} />
                <span>Vidéos</span>
              </button>
            </div>
          </div>

          {/* Grille de photos */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div 
                  key={photo.id}
                  className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => openModal(photo, 'photo')}
                >
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <Image size={48} className="text-gray-500" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Grille de vidéos */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div 
                  key={video.id}
                  className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => openModal(video, 'video')}
                >
                  <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <Play size={48} className="text-gray-500" />
                    </div>
                    {/* Durée de la vidéo */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    {/* Overlay de lecture */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de visualisation */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Bouton de fermeture */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <X size={20} className="text-white" />
            </button>
            
            {/* Contenu du modal */}
            <div className="backdrop-blur-md bg-black/50 border border-white/20 rounded-2xl overflow-hidden">
              {selectedMedia.type === 'photo' ? (
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <Image size={64} className="text-gray-500" />
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <Play size={64} className="text-gray-500" />
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl">{selectedMedia.title}</h3>
                {selectedMedia.duration && (
                  <p className="text-gray-300 mt-2">Durée: {selectedMedia.duration}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}