"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type TapRevealSliderProps = {
  before: string;
  after: string;
  title: string;
};

export default function TapRevealSlider({ before, after, title }: TapRevealSliderProps) {
  const [split, setSplit] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <article className="group overflow-hidden rounded-xl border border-primary/15 bg-white shadow-lg hover:shadow-2xl hover:border-primary/40 transition-[shadow,border-color] duration-300">
      <div
        className="relative w-full select-none cursor-ew-resize"
        style={{ paddingBottom: "75%" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Before Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${before})` }}
          aria-label={`${title} before photo`}
        />

        {/* After Image */}
        <div
          className="absolute inset-y-0 left-0 bg-cover bg-center"
          style={{ width: `${split}%`, backgroundImage: `url(${after})` }}
          aria-label={`${title} after photo`}
        />

        {/* Label Background Gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Before/After Labels */}
        <motion.div
          className="absolute left-3 top-3 rounded-lg bg-gradient-to-r from-primary/90 to-primary/70 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary backdrop-blur-sm"
          animate={{ scale: split < 25 ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Before
        </motion.div>

        <motion.div
          className="absolute right-3 top-3 rounded-lg bg-gradient-to-r from-primary/70 to-primary/90 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary backdrop-blur-sm"
          animate={{ scale: split > 75 ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          After
        </motion.div>

        {/* Slider Divider */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent shadow-lg"
          style={{ left: `${split}%` }}
          animate={{ left: `${split}%` }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        >
          {/* Control Handle */}
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-primary to-primary/80 text-on-primary shadow-2xl"
            animate={{ scale: isHovering ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <span className="text-base font-bold leading-none">⟨⟩</span>
          </motion.div>
        </motion.div>

        {/* Invisible Slider Input */}
        <input
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          aria-label={`Adjust before and after comparison for ${title}`}
        />
      </div>

      {/* Card Footer */}
      <div className="border-t border-primary/10 bg-gradient-to-r from-white to-primary/2 px-5 py-4 group-hover:bg-primary/5 transition-colors duration-300">
        <h3 className="font-heading text-lg font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
          {title}
        </h3>
        <p className="text-xs text-secondary/60 mt-1 group-hover:text-secondary/80 transition-colors duration-300">
          Drag to compare before and after
        </p>
      </div>
    </article>
  );
}
