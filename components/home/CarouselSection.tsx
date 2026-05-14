import { PortfolioItem } from "./types";
import ImageCarousel from "./ImageCarousel";

type CarouselSectionProps = {
  portfolio: PortfolioItem[];
};

export default function CarouselSection({ portfolio }: CarouselSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl bg-white px-6 pt-30 pb-6 md:px-8 md:pt-28 md:pb-8">
      {/* Hero Section Content */}
      <div className="mb-12 space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 border border-primary/20 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Quality Workmanship</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-secondary leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Roofing Solutions</span> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary/60">Sydney</span>
          </h1>

          <p className="text-xl text-secondary/70 max-w-2xl leading-relaxed">
            Expert roof restoration, repairs, and installations with over 15 years of experience. We deliver quality workmanship and reliability on every project across Western Sydney.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
            <p className="text-sm text-secondary/70">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
            <p className="text-sm text-secondary/70">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold text-primary">4.9★</p>
            <p className="text-sm text-secondary/70">Customer Rating</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="#enquiry"
            className="rounded-lg bg-gradient-to-r from-primary via-primary to-primary/90 px-6 py-3 text-sm md:text-base font-bold uppercase tracking-widest text-on-primary hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            Get Free Quote
          </a>
          <a
            href="#services"
            className="rounded-lg border-2 border-primary px-6 py-3 text-sm md:text-base font-bold uppercase tracking-widest text-primary hover:bg-primary/10 transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
