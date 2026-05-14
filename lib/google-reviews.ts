/**
 * Google Business Profile Reviews API Integration
 * Fetches real reviews from Google Business Profile
 */

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  publishedAtMs: number;
  reviewId: string;
}

export interface GooglePlaceDetails {
  name: string;
  rating: number;
  ratingCount: number;
  reviews: GoogleReview[];
}

/**
 * Fetches Google reviews from the Google Business Profile API
 * This function should be called from a server-side route to keep API credentials secure
 */
export async function fetchGoogleReviews(): Promise<GooglePlaceDetails | null> {
  try {
    const response = await fetch('/api/google-reviews', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch Google reviews:', response.statusText);
      return null;
    }

    const data: GooglePlaceDetails = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return null;
  }
}

/**
 * Format date for display
 */
export function formatReviewDate(timestampMs: number): string {
  const date = new Date(timestampMs);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
