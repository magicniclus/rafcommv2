import { NextRequest, NextResponse } from 'next/server';

interface GooglePlaceReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GooglePlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GooglePlaceReview[];
}

interface GooglePlacesResponse {
  result: GooglePlaceDetails;
  status: string;
  error_message?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const placeId = searchParams.get('placeId');

    // Vérification du placeId
    if (!placeId) {
      return NextResponse.json(
        { error: 'Le paramètre placeId est requis' },
        { status: 400 }
      );
    }

    // Vérification de la clé API
    const apiKey = process.env.GOOGLE_PLACE_API_KEY;
    if (!apiKey) {
      console.error('GOOGLE_PLACE_API_KEY non configurée');
      return NextResponse.json(
        { error: 'Configuration API manquante' },
        { status: 500 }
      );
    }

    // Construction de l'URL de l'API Google Places
    const googleApiUrl = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    googleApiUrl.searchParams.set('place_id', placeId);
    googleApiUrl.searchParams.set('fields', 'rating,user_ratings_total,reviews,name');
    googleApiUrl.searchParams.set('language', 'fr');
    googleApiUrl.searchParams.set('key', apiKey);

    // Appel à l'API Google Places
    const response = await fetch(googleApiUrl.toString());
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data: GooglePlacesResponse = await response.json();

    // Vérification du statut de la réponse Google
    if (data.status !== 'OK') {
      console.error('Erreur Google Places API:', data.status, data.error_message);
      return NextResponse.json(
        { error: 'Impossible de récupérer les données de l\'établissement' },
        { status: 400 }
      );
    }

    // Formatage de la réponse
    const formattedResponse = {
      name: data.result.name || 'Établissement',
      rating: data.result.rating || 0,
      reviewsCount: data.result.user_ratings_total || 0,
      reviews: (data.result.reviews || []).map(review => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text
      }))
    };

    return NextResponse.json(formattedResponse);

  } catch (error) {
    console.error('Erreur lors de la récupération des avis Google:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
