/**
 * API Route to fetch Google Business Profile reviews
 * This endpoint securely calls the Google Places API using credentials stored in environment variables
 */

import { NextRequest, NextResponse } from 'next/server';

interface GooglePlacesResponse {
  places: Array<{
    name: string;
    rating: number;
    googleMapsUri: string;
    reviews: Array<{
      author: string;
      rating: number;
      text: string;
      publishTime: string;
      name: string;
    }>;
  }>;
}

export async function GET(request: NextRequest) {
  try {
    // Verify environment variables are set
    const googleApiKey = process.env.GOOGLE_PLACES_API_KEY;
    const businessAccountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID;

    if (!googleApiKey || !businessAccountId) {
      return NextResponse.json(
        { error: 'Google API credentials not configured' },
        { status: 500 }
      );
    }

    /**
     * IMPORTANT: For production implementation, you'll need to:
     * 1. Set up Google Cloud Project with Business Profile API enabled
     * 2. Create OAuth 2.0 credentials or Service Account
     * 3. Add GOOGLE_PLACES_API_KEY and GOOGLE_BUSINESS_ACCOUNT_ID to .env.local
     * 
     * The actual API call will depend on which Google API you're using:
     * - Google Places API (New) with Business Profile support
     * - Google My Business API (Legacy - being phased out)
     * 
     * For now, returning mock data for demonstration
     */

    // Mock response matching the expected structure
    const mockResponse: GooglePlacesResponse = {
      places: [
        {
          name: 'Baba Farid Roofing',
          rating: 4.8,
          googleMapsUri: 'https://maps.google.com/?cid=YOUR_PLACE_ID',
          reviews: [
            {
              author: 'John Smith',
              rating: 5,
              text: 'Excellent roofing work! The team was professional, punctual, and delivered outstanding results. Highly recommended!',
              publishTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'John Smith',
            },
            {
              author: 'Sarah Johnson',
              rating: 5,
              text: 'Amazing service and quality workmanship. They completed the roof restoration ahead of schedule. Will definitely hire them again!',
              publishTime: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'Sarah Johnson',
            },
            {
              author: 'Mike Davis',
              rating: 4,
              text: 'Great team to work with. They provided a detailed quote and delivered quality work. Very satisfied with the results.',
              publishTime: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'Mike Davis',
            },
            {
              author: 'Emily Brown',
              rating: 5,
              text: 'Professional, reliable, and excellent communication throughout the project. Highly recommend Baba Farid Roofing!',
              publishTime: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'Emily Brown',
            },
            {
              author: 'David Wilson',
              rating: 5,
              text: 'Outstanding quality and attention to detail. The team took great care of my property and cleaned up thoroughly after.',
              publishTime: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'David Wilson',
            },
            {
              author: 'Lisa Anderson',
              rating: 4,
              text: 'Very impressed with the workmanship. They answered all my questions and made the process stress-free.',
              publishTime: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
              name: 'Lisa Anderson',
            },
          ],
        },
      ],
    };

    // Transform the response to our format
    const place = mockResponse.places[0];
    const transformedData = {
      name: place.name,
      rating: place.rating,
      ratingCount: place.reviews.length,
      reviews: place.reviews.map((review) => ({
        author: review.author,
        rating: review.rating,
        text: review.text,
        publishedAtMs: new Date(review.publishTime).getTime(),
        reviewId: `${review.author}-${review.publishTime}`.replace(/\s+/g, '-').toLowerCase(),
      })),
    };

    // Cache the response for 1 hour
    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
