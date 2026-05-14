'use client';

import { useEffect, useState } from 'react';
import { formatReviewDate } from '@/lib/google-reviews';

interface Review {
  author: string;
  rating: number;
  text: string;
  publishedAtMs: number;
  reviewId: string;
}

interface PlaceDetails {
  name: string;
  rating: number;
  ratingCount: number;
  reviews: Review[];
}

export default function GoogleReviewsSection() {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data: PlaceDetails = await response.json();
        setPlaceDetails(data);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Unable to load reviews at this time');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section id="reviews" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Google Reviews</span>
              </h2>
              <p className="text-lg text-secondary/70 max-w-xl leading-relaxed">
                Real feedback from our customers on Google
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="animate-pulse text-secondary/60">Loading reviews...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !placeDetails) {
    return (
      <section id="reviews" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="space-y-2">
              <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Google Reviews</span>
              </h2>
            </div>
          </div>
          <div className="text-center py-12">
            <p className="text-secondary/70">{error || 'Unable to load reviews'}</p>
            <p className="text-sm text-secondary/50 mt-2">Check back soon or visit our</p>
            <a 
              href="https://www.google.com/search?q=Baba+Farid+Roofing+Blacktown"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-primary/80 font-semibold text-sm"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </section>
    );
  }

  const displayReviews = placeDetails.reviews.slice(0, 6);

  return (
    <section id="reviews" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Google Reviews</span>
            </h2>
            <p className="text-lg text-secondary/70 max-w-xl leading-relaxed">
              Real feedback from our customers on Google
            </p>
          </div>
          
          {/* Rating Badge */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="https://www.google.com/search?q=Baba+Farid+Roofing+Blacktown"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-6 py-3 hover:bg-primary/15 transition-colors"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-primary">★</span>
                ))}
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-primary text-sm">{placeDetails.rating.toFixed(1)}</span>
                <span className="text-xs text-secondary/60">{placeDetails.ratingCount} reviews</span>
              </div>
            </a>
            <p className="text-xs text-secondary/50 text-center md:text-right">Based on Google reviews</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map((review, idx) => (
            <article
              key={review.reviewId}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group relative overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white p-6 shadow-sm hover:shadow-lg transition-[transform,shadow,border-color,background-color] duration-300 hover:border-primary/40 hover:-translate-y-1 will-change-transform animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative space-y-4">
                {/* Author & Date */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                      {review.author}
                    </h3>
                    <p className="text-xs text-secondary/50 mt-1">
                      {formatReviewDate(review.publishedAtMs)}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg transition-all duration-300 ${
                        i < review.rating ? 'text-primary group-hover:scale-125' : 'text-secondary/20'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-secondary/70 leading-relaxed text-sm group-hover:text-secondary/80 transition-colors duration-300 line-clamp-4">
                  &quot;{review.text}&quot;
                </p>

                {/* Bottom accent line */}
                <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Reviews Link */}
        {placeDetails.reviews.length > 6 && (
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=Baba+Farid+Roofing+Blacktown"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 px-6 py-3 text-sm md:text-base font-bold uppercase tracking-widest text-on-primary hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
            >
              View All {placeDetails.ratingCount} Reviews on Google
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
