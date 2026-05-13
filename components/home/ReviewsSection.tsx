import { ServiceReview } from "./types";

type ReviewsSectionProps = {
  serviceReviews: ServiceReview[];
};

export default function ReviewsSection({ serviceReviews }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="border-y border-secondary/20 bg-surface/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Reviews and Testimonials</h2>
            <p className="mt-2 text-secondary">Feedback from customers who booked restoration, repairs, painting, and installation work.</p>
          </div>
          <span className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary">
            Verified Client Feedback
          </span>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {serviceReviews.map((item) => (
            <article key={item.name} className="rounded-xl border border-secondary/20 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Service: {item.service}</p>
              <p className="mt-2 font-semibold text-primary">{item.name}</p>
              {item.rating ? <p className="mt-1 text-sm text-primary">{"★".repeat(item.rating)}</p> : null}
              <p className="mt-2 text-sm text-secondary">{item.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
