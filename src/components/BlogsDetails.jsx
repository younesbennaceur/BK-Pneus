import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Eye, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Base de données des articles
  const articlesData = {
    1: {
      id: 1,
      category: "Dépannage",
      title: "Camions et utilitaires – les bons réflexes en cas d'éclatement",
      excerpt: "Lorsque vous conduisez un camion ou un utilitaire, un éclatement de pneu peut survenir à tout moment, provoquant des situations potentiellement dangereuses.",
      image: "/blog1.jpg",
      date: "14 Aug, 2024",
      views: "1.5k",
      content: `
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Introduction</h2>
        <p style="margin-bottom: 1.5rem;">Lorsque vous conduisez un camion ou un utilitaire, un éclatement de pneu peut survenir à tout moment, provoquant des situations potentiellement dangereuses. Il est essentiel de connaître les bons réflexes à adopter pour garantir votre sécurité et celle des autres usagers de la route.</p>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Les premiers réflexes en cas d'éclatement</h2>
        <p style="margin-bottom: 1rem;">Dès que vous ressentez une perte de contrôle ou entendez le bruit caractéristique d'un éclatement :</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;"><strong style="color: #ef4444;">Gardez votre calme</strong> et maintenez fermement le volant</li>
          <li style="margin-bottom: 0.5rem;"><strong style="color: #ef4444;">Ne freinez pas brutalement</strong> - cela pourrait aggraver la situation</li>
          <li style="margin-bottom: 0.5rem;"><strong style="color: #ef4444;">Relâchez progressivement l'accélérateur</strong> pour réduire la vitesse</li>
          <li style="margin-bottom: 0.5rem;"><strong style="color: #ef4444;">Allumez vos feux de détresse</strong> pour signaler votre situation</li>
        </ul>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Faire appel à un professionnel</h2>
        <p style="margin-bottom: 1.5rem;">En cas d'éclatement, n'hésitez pas à contacter un service de dépannage professionnel comme BK-PNEUS. Nos équipes interviennent rapidement sur toute l'Île-de-France pour vous dépanner en toute sécurité.</p>
      `
    },
    2: {
      id: 2,
      category: "Pneu",
      title: "Guide complet de maintenance des pneus",
      excerpt: "Guide complet pour réagir en cas d'éclatement de pneu sur véhicule utilitaire.",
      image: "/blog2.jpg",
      date: "16 Aug, 2024",
      views: "1.5k",
      content: `
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Vérification de la pression</h2>
        <p style="margin-bottom: 1.5rem;">La pression des pneus est un élément crucial pour votre sécurité et l'économie de carburant. Une pression inadéquate peut causer une usure prématurée et augmenter les risques d'accident.</p>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Contrôle de l'usure</h2>
        <p style="margin-bottom: 1rem;">Inspectez régulièrement vos pneus pour détecter :</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">L'usure inégale des sculptures</li>
          <li style="margin-bottom: 0.5rem;">Les fissures sur les flancs</li>
          <li style="margin-bottom: 0.5rem;">La profondeur des rainures</li>
          <li style="margin-bottom: 0.5rem;">Les objets incrustés</li>
        </ul>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Services BK-PNEUS</h2>
        <p style="margin-bottom: 1.5rem;">BK-PNEUS vous propose un service complet de maintenance et de contrôle de vos pneumatiques. Nos techniciens experts interviennent à domicile pour tous vos besoins.</p>
      `
    },
    3: {
      id: 3,
      category: "Pneu",
      title: "Prévention et sécurité routière",
      excerpt: "Conseils de sécurité et maintenance préventive pour éviter les éclatements.",
      image: "/blog3.png",
      date: "16 Aug, 2024",
      views: "1.5k",
      content: `
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Prévention des accidents</h2>
        <p style="margin-bottom: 1.5rem;">La prévention est la meilleure protection contre les accidents liés aux pneus. Une maintenance régulière et des contrôles fréquents peuvent éviter la plupart des incidents.</p>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Bonnes pratiques</h2>
        <p style="margin-bottom: 1rem;">Adoptez ces réflexes pour rouler en sécurité :</p>
        <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
          <li style="margin-bottom: 0.5rem;">Contrôlez la pression mensuellement</li>
          <li style="margin-bottom: 0.5rem;">Évitez les surcharges</li>
          <li style="margin-bottom: 0.5rem;">Adaptez votre conduite aux conditions</li>
          <li style="margin-bottom: 0.5rem;">Changez vos pneus selon les saisons</li>
        </ul>
        
        <h2 style="color: white; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">Intervention BK-PNEUS</h2>
        <p style="margin-bottom: 1.5rem;">Notre équipe d'experts est disponible 24h/24 pour tous vos besoins en pneumatiques. Contactez-nous pour un service rapide et professionnel.</p>
      `
    }
  };

  const article = articlesData[id];

  // Si l'article n'existe pas, rediriger vers la liste
  if (!article) {
    navigate('/actus');
    return null;
  }

  const relatedArticles = Object.values(articlesData)
    .filter(art => art.id !== parseInt(id))
    .slice(0, 2);

  const handleBackToArticles = () => {
    navigate('/actus');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const handleRelatedArticleClick = (articleId) => {
    navigate(`/blog/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-black text-white py-32">
      {/* Image de fond */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/bg.svg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Bouton retour */}
        <div className="mb-8">
          <button 
            onClick={handleBackToArticles}
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour aux articles</span>
          </button>
        </div>

        {/* Article principal */}
        <article className="backdrop-blur-md bg-black/30 border border-white/20 rounded-3xl overflow-hidden">
          {/* Image de l'article */}
          <div className="relative">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>
          </div>

          {/* Contenu de l'article */}
          <div className="p-8">
            {/* En-tête de l'article */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">BK</span>
                    </div>
                    <span className="font-medium text-white">BK-PNEUS</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Calendar size={16} />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Eye size={16} />
                    <span className="text-sm">{article.views} vues</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Share2 size={16} />
                  <span>Partager</span>
                </button>
              </div>
            </div>

            {/* Contenu de l'article */}
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Contact CTA */}
            <div className="mt-12 p-6 bg-red-600/20 border border-red-500/30 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Besoin d'une intervention d'urgence ?
              </h3>
              <p className="text-gray-300 mb-4">
                Notre équipe BK-PNEUS intervient 24h/24 et 7j/7 sur toute l'Île-de-France pour tous vos besoins de dépannage et montage de pneus.
              </p>
              <a 
                href="tel:0764466621"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Appeler maintenant : 06.52.69.32.93
              </a>
            </div>
          </div>
        </article>

        {/* Articles similaires */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Articles similaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <div 
                key={relatedArticle.id}
                className="backdrop-blur-md bg-black/30 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={() => handleRelatedArticleClick(relatedArticle.id)}
              >
                <img 
                  src={relatedArticle.image} 
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">{relatedArticle.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}