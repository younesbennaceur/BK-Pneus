import React from 'react';
import { Calendar, Eye } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      category: "Dépannage",
      title: "Camions et utilitaires – les bons réflexes en cas d'éclatement",
      excerpt: "Lorsque vous conduisez un camion ou un utilitaire, un éclatement de pneu peut survenir à tout moment, provoquant des situations potentiellement dangereuses. Il est essentiel de connaître les bons réflexes à adopter pour garantir votre sécurité et celle des autres usagers de la route. Dans cet article, vous découvrirez les étapes à suivre pour gérer efficacement un éclatement, ainsi que des conseils pratiques pour éviter ce type d'incident à l'avenir. Restez vigilant et informé pour",
      image: "/blog1.jpg",
      date: "14 Aug, 2024",
      views: "1.5k",
      featured: true
    },
    {
      id: 2,
      category: "pneu",
      title: "Camions et utilitaires – les bons réflexes en cas d'éclatement",
      excerpt: "Guide complet pour réagir en cas d'éclatement de pneu sur véhicule utilitaire.",
      image: "/blog2.jpg",
      date: "16 Aug, 2024",
      views: "1.5k",
      featured: false
    },
    {
      id: 3,
      category: "pneu",
      title: "Camions et utilitaires – les bons réflexes en cas d'éclatement",
      excerpt: "Conseils de sécurité et maintenance préventive pour éviter les éclatements.",
      image: "/blog3.png",
      date: "16 Aug, 2024",
      views: "1.5k",
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <span className="text-red-500 text-xl sm:text-2xl mr-3">★</span>
            <h2 className="text-red-500 font-poppins text-sm sm:text-base font-medium uppercase tracking-wide">
              Actus
            </h2>
          </div>
          
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Nos Derniers Articles
          </h1>
        </div>

        {/* Article principal featured */}
        {featuredArticle && (
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg ">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <span className="bg-gray-800 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {featuredArticle.title}
                </h2>
                
                <p className="font-poppins text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                {/* Métadonnées */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="flex items-center space-x-2">
                      <img src="/bk-logo-small.png" alt="BK-PNEUS" className="w-6 h-6 rounded-full" />
                      <span className="font-poppins text-sm sm:text-base font-medium text-gray-900">BK-PNEUS</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span className="font-poppins text-sm">{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Eye size={16} />
                      <span className="font-poppins text-sm">{featuredArticle.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles secondaires */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {regularArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-lg ">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-poppins text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {article.title}
                </h3>
                
                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <img src="/bk-logo-small.png" alt="BK-PNEUS" className="w-5 h-5 rounded-full" />
                      <span className="font-poppins font-medium text-gray-900">BK-PNEUS</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span className="font-poppins text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span className="font-poppins text-xs">{article.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir tous */}
        <div className="text-center">
          <button className="bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-poppins font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105">
            voir tous
          </button>
        </div>
      </div>
    </div>
  );
}