'use client';

import { useState, useEffect } from 'react';
import { Star, ExternalLink } from 'lucide-react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

interface GoogleReviewsData {
  name: string;
  rating: number;
  reviewsCount: number;
  reviews: Review[];
}

interface GoogleReviewsBannerProps {
  placeId: string;
}

const GoogleReviewsBanner = ({ placeId }: GoogleReviewsBannerProps) => {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/google-reviews?placeId=${encodeURIComponent(placeId)}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des avis');
        }

        const reviewsData: GoogleReviewsData = await response.json();
        setData(reviewsData);
      } catch (err) {
        console.error('Erreur lors du chargement des avis Google:', err);
        setError('Impossible de charger les avis Google pour le moment.');
      } finally {
        setLoading(false);
      }
    };

    if (placeId) {
      fetchReviews();
    }
  }, [placeId]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : index < rating
            ? 'text-yellow-400 fill-yellow-400/50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=${placeId}`;

  if (loading) {
    return (
      <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="animate-pulse">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="h-6 bg-gray-200 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-40"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="text-center text-gray-500">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {/* En-tête avec note globale */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/google-logo.png" 
                  alt="Google" 
                  className="w-6 h-6"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm font-medium text-gray-600">Avis Google</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(data.rating)}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {data.rating.toFixed(1)} / 5
                </span>
                <span className="text-sm text-gray-500">
                  ({data.reviewsCount} avis)
                </span>
              </div>
            </div>
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les avis
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Avis individuels */}
          {data.reviews && data.reviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.reviews.slice(0, 3).map((review, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900 text-sm">
                      {review.author_name}
                    </span>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{truncateText(review.text)}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Message si pas d'avis */}
          {(!data.reviews || data.reviews.length === 0) && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                Aucun avis disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsBanner;
