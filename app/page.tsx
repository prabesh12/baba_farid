"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  AboutSection,
  CarouselSection,
  EnquirySection,
  FaqSection,
  FeedbackSection,
  Footer,
  Header,
  HeroSection,
  LocationMap,
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-primary/2 to-white text-secondary">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(27, 58, 95, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(42, 42, 42, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.04) 0%, transparent 50%)
          `
        }}
      />

      <Header />

      <CarouselSection portfolio={portfolio} />

      <main id="home" className="relative z-10 pt-2">
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
        <LocationMap />
      </main>

      <Footer />
    </div>
  );
}
