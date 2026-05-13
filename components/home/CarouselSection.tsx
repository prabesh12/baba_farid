import { PortfolioItem } from "./types";
import ImageCarousel from "./ImageCarousel";

type CarouselSectionProps = {
  portfolio: PortfolioItem[];
};

export default function CarouselSection({ portfolio }: CarouselSectionProps) {
  return (
    <section className="w-full bg-white">
      <ImageCarousel
        images={portfolio.map((item) => ({
          src: item.after,
          alt: item.title,
        }))}
      />
    </section>
  );
}
