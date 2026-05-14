'use client';

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

// Dummy reviews data
const dummyPlaceDetails: PlaceDetails = {
  name: 'Baba Farid Roofing',
  rating: 4.9,
  ratingCount: 127,
  reviews: [
    {
      author: 'John Smith',
      rating: 5,
      text: 'Excellent roof restoration work! The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommended!',
      publishedAtMs: Date.now() - 7 * 24 * 60 * 60 * 1000,
      reviewId: '1',
    },
    {
      author: 'Sarah Johnson',
      rating: 5,
      text: 'Great service from start to finish. They fixed our gutter issues and installed new fascia boards. Very happy with the results!',
      publishedAtMs: Date.now() - 14 * 24 * 60 * 60 * 1000,
      reviewId: '2',
    },
    {
      author: 'Michael Brown',
      rating: 5,
      text: 'Professional team, fair pricing, and excellent workmanship. Our roof looks brand new! Would definitely use them again.',
      publishedAtMs: Date.now() - 21 * 24 * 60 * 60 * 1000,
      reviewId: '3',
    },
    {
      author: 'Emma Wilson',
      rating: 4,
      text: 'Very happy with the roof restoration. The team was friendly and kept us updated throughout the process. Recommended!',
      publishedAtMs: Date.now() - 28 * 24 * 60 * 60 * 1000,
      reviewId: '4',
    },
    {
      author: 'David Lee',
      rating: 5,
      text: 'Outstanding work on our solar mesh installation. Quick, efficient, and professional. Best decision we made for our roof!',
      publishedAtMs: Date.now() - 35 * 24 * 60 * 60 * 1000,
      reviewId: '5',
    },
    {
      author: 'Lisa Anderson',
      rating: 5,
      text: 'Had them install gutter guards - fantastic service! They explained everything clearly and the installation was flawless.',
      publishedAtMs: Date.now() - 42 * 24 * 60 * 60 * 1000,
      reviewId: '6',
    },
  ],
};

export default function GoogleReviewsSection() {
  const placeDetails = dummyPlaceDetails;
  const displayReviews = placeDetails.reviews.slice(0, 6);

  return (
    <section id="reviews" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Reviews</span>
            </h2>
            <p className="text-lg text-secondary/70 max-w-xl leading-relaxed">
              Real feedback from our satisfied customers
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
