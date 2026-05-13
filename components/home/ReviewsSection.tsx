import { ServiceReview } from "./types";

type ReviewsSectionProps = {
  serviceReviews: ServiceReview[];
};

export default function ReviewsSection({ serviceReviews }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Reviews</span> &
              <br className="hidden sm:block" />
              Testimonials
            </h2>
            <p className="text-lg text-secondary/70 max-w-xl leading-relaxed">
              Feedback from customers who booked restoration, repairs, painting, and installation work.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-6 py-2.5 text-sm font-bold text-primary whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Verified Client Feedback
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceReviews.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-secondary/60 text-lg">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            serviceReviews.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="group relative overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 animate-in fade-in scale-95 duration-700"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative">
                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {item.service}
                    </span>
                  </div>

                  {/* Customer Name */}
                  <h3 className="font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
                    {item.name}
                  </h3>

                  {/* Star Rating */}
                  {item.rating ? (
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg transition-all duration-300 ${
                            i < (item.rating || 0) ? 'text-primary group-hover:scale-125' : 'text-secondary/20'
                          }`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {/* Review Text */}
                  <p className="text-secondary/70 leading-relaxed text-sm group-hover:text-secondary/80 transition-colors duration-300">
                    &quot;{item.review}&quot;
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
