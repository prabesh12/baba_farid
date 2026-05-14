import { FormEvent } from "react";
import { ServiceItem } from "./types";

type FeedbackSectionProps = {
  services: ServiceItem[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function FeedbackSection({ services, onSubmit }: FeedbackSectionProps) {
  return (
    <section id="feedback" className="mx-auto w-full max-w-6xl px-6 py-6 md:py-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
              Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Feedback</span>
            </h2>
            <p className="text-lg text-secondary/70 leading-relaxed">
              We value your feedback. Customers can submit service feedback here and our team will review it for publishing in the reviews section.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-3">
            {[
              { icon: "1", label: "Tell us which service you booked" },
              { icon: "2", label: "Rate your experience from 1 to 5 stars" },
              { icon: "3", label: "Share what went well or what we can improve" },
            ].map((step, idx) => (
              <div
                key={step.label}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="flex gap-4 items-start group animate-in fade-in slide-in-from-left-4 duration-700"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-on-primary font-bold text-sm">
                  {step.icon}
                </div>
                <p className="text-secondary/70 group-hover:text-secondary/90 transition-colors duration-300 pt-0.5">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 p-6">
            <p className="text-sm text-secondary/80 leading-relaxed">
              <span className="font-bold text-primary">Note:</span> All feedback is reviewed by our team before being published. This helps us maintain the quality and authenticity of our reviews.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <form
          onSubmit={onSubmit}
          className="space-y-5 rounded-2xl border border-primary/15 bg-gradient-to-br from-white to-primary/2 p-5 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-fit sticky top-32"
        >
          {/* Name Field */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="feedback-name">
              Full Name
            </label>
            <input
              id="feedback-name"
              name="name"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="Your name"
            />
          </div>

          {/* Service Select */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="feedback-service">
              Service Used
            </label>
            <select
              id="feedback-service"
              name="service"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Select */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="feedback-rating">
              Rating
            </label>
            <select
              id="feedback-rating"
              name="rating"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
            >
              <option value="">Choose rating</option>
              <option value="5">★★★★★ Excellent</option>
              <option value="4">★★★★ Very Good</option>
              <option value="3">★★★ Good</option>
              <option value="2">★★ Fair</option>
              <option value="1">★ Poor</option>
            </select>
          </div>

          {/* Feedback Textarea */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="feedback-message">
              Your Feedback
            </label>
            <textarea
              id="feedback-message"
              name="feedback"
              rows={4}
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none resize-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="Share your experience..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/90 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold uppercase tracking-widest text-on-primary hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Submit Feedback
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
