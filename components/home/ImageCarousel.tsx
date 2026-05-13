"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageCarouselProps = {
  images: { src: string; alt: string }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  if (images.length === 0) {
    return (
      <div className="w-full rounded-2xl border border-primary/15 bg-primary/5 h-96 flex items-center justify-center">
        <p className="text-secondary/60">No images available</p>
      </div>
    );
  }

  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-lg"
      style={{ paddingBottom: "66.67%" }}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Image Container */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-primary/5 to-primary/2">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white">
        {current + 1} / {images.length}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              setIsAutoPlay(false);
            }}
            aria-label={`Go to image ${idx + 1}`}
            className={`transition-all duration-300 ${
              idx === current
                ? "w-8 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => {
          setCurrent((prev) => (prev - 1 + images.length) % images.length);
          setIsAutoPlay(false);
        }}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-all duration-300 flex items-center justify-center text-primary font-bold opacity-0 group-hover:opacity-100"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => {
          setCurrent((prev) => (prev + 1) % images.length);
          setIsAutoPlay(false);
        }}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-all duration-300 flex items-center justify-center text-primary font-bold opacity-0 group-hover:opacity-100"
      >
        ›
      </button>

      {/* Auto-play Indicator */}
      <div className="absolute bottom-4 right-4 z-20 text-xs text-white/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {isAutoPlay ? "Playing..." : "Paused"}
      </div>
    </div>
  );
}
