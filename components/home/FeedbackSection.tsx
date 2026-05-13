import { FormEvent } from "react";
import { ServiceItem } from "./types";

type FeedbackSectionProps = {
  services: ServiceItem[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function FeedbackSection({ services, onSubmit }: FeedbackSectionProps) {
  return (
    <section id="feedback" className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="grid gap-8 rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Share Your Feedback</h2>
          <p className="mt-3 text-secondary">
            We value your feedback. Customers can submit service feedback here and our team will review it for publishing in the reviews section.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-secondary">
            <li>Tell us which service you booked.</li>
            <li>Rate your experience from 1 to 5 stars.</li>
            <li>Share what went well or what we can improve.</li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-secondary/20 bg-surface/70 p-5">
          <label className="block text-sm font-semibold text-secondary" htmlFor="feedback-name">
            Full Name
          </label>
          <input
            id="feedback-name"
            name="name"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <label className="block text-sm font-semibold text-secondary" htmlFor="feedback-service">
            Service Used
          </label>
          <select
            id="feedback-service"
            name="service"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          <label className="block text-sm font-semibold text-secondary" htmlFor="feedback-rating">
            Rating
          </label>
          <select
            id="feedback-rating"
            name="rating"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          >
            <option value="">Choose rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>

          <label className="block text-sm font-semibold text-secondary" htmlFor="feedback-message">
            Your Feedback
          </label>
          <textarea
            id="feedback-message"
            name="feedback"
            rows={4}
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-5 py-3 font-semibold text-on-primary transition hover:bg-primary/90"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
