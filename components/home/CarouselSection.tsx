import { PortfolioItem } from "./types";
import ImageCarousel from "./ImageCarousel";

type CarouselSectionProps = {
  portfolio: PortfolioItem[];
};

export default function CarouselSection({ portfolio }: CarouselSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl bg-white px-6 pt-24 pb-6 md:px-8 md:pt-28 md:pb-8">
      <ImageCarousel
        images={portfolio.map((item) => ({
          src: item.after,
          alt: item.title,
        }))}
      />
    </section>
  );
}
