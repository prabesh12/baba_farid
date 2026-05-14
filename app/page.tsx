"use client";

import {
  AboutSection,
  CarouselSection,
  EnquirySection,
  FaqSection,
  Footer,
  Header,
  HeroSection,
  ProjectsSection,
  GoogleReviewsSection,
  ServiceAreasSection,
  ServicesSection,
  WhyChooseUsSection,
} from "../components/home";
import FloatingActionButtons from "../components/FloatingActionButtons";
import {
  faqs,
  installationProcess,
  portfolio,
  restorationProcess,
  serviceAreas,
  services,
} from "../components/home/constants";

export default function Home() {
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
        <ProjectsSection portfolio={portfolio} />
        <WhyChooseUsSection restorationProcess={restorationProcess} installationProcess={installationProcess} />
        <ServiceAreasSection serviceAreas={serviceAreas} />
        <AboutSection />
        <GoogleReviewsSection />

        <FaqSection faqs={faqs} />
        <EnquirySection services={services} />
      </main>

      <FloatingActionButtons />

      <Footer />
    </div>
  );
}
