"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  AboutSection,
  EnquirySection,
  FaqSection,
  FeedbackSection,
  Header,
  HeroSection,
  ProjectsSection,
  ReviewsSection,
  ServiceAreasSection,
  ServicesSection,
  WhyChooseUsSection,
} from "../components/home";
import {
  faqs,
  installationProcess,
  portfolio,
  restorationProcess,
  serviceAreas,
  services,
} from "../components/home/constants";
import { ServiceReview } from "../components/home/types";

const initialServiceReviews: ServiceReview[] = [];

export default function Home() {
  const [serviceReviews, setServiceReviews] = useState<ServiceReview[]>(initialServiceReviews);

  useEffect(() => {
    const stored = localStorage.getItem("bfr-feedback-reviews");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as ServiceReview[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setServiceReviews((prev) => [...parsed, ...prev]);
      }
    } catch {
      // Ignore malformed local storage data and continue with defaults.
    }
  }, []);

  const handleFeedbackSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const ratingValue = Number(data.get("rating"));
    const review = String(data.get("feedback") ?? "").trim();

    if (!name || !service || !review || Number.isNaN(ratingValue)) return;

    const newReview: ServiceReview = {
      name,
      service,
      review,
      rating: ratingValue,
    };

    setServiceReviews((prev) => {
      const updated = [newReview, ...prev];
      const onlySubmitted = updated.filter((item) => item.rating !== undefined);
      localStorage.setItem("bfr-feedback-reviews", JSON.stringify(onlySubmitted.slice(0, 30)));
      return updated;
    });

    form.reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,var(--light-gray)_52%,#e8edf2_100%)] text-secondary">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,transparent_42%,rgba(31,58,95,0.09)_63%,rgba(58,58,58,0.08)_100%)]" />

      <Header />

      <main id="home" className="relative z-10 pt-24">
        <HeroSection />
        <ServicesSection services={services} />
        <FeedbackSection services={services} onSubmit={handleFeedbackSubmit} />
        <ProjectsSection portfolio={portfolio} />
        <WhyChooseUsSection restorationProcess={restorationProcess} installationProcess={installationProcess} />
        <ServiceAreasSection serviceAreas={serviceAreas} />
        <AboutSection />
        <ReviewsSection serviceReviews={serviceReviews} />

        <FaqSection faqs={faqs} />
        <EnquirySection services={services} />
      </main>
    </div>
  );
}
