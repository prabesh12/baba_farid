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

  return (
    <article className="overflow-hidden rounded-2xl border border-secondary/20 bg-white shadow-sm">
      <div className="relative w-full select-none" style={{ paddingBottom: "75%" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${before})` }} aria-label={`${title} before photo`} />
        <div
          className="absolute inset-y-0 left-0 bg-cover bg-center"
          style={{ width: `${split}%`, backgroundImage: `url(${after})` }}
          aria-label={`${title} after photo`}
        />

        <div className="absolute left-3 top-3 rounded bg-black/55 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">Before</div>
        <div className="absolute right-3 top-3 rounded bg-black/55 px-2 py-1 text-xs font-bold uppercase tracking-widest text-white">After</div>

        <motion.div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]"
          style={{ left: `${split}%` }}
          animate={{ left: `${split}%` }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-primary text-on-primary shadow-lg">
            <span className="text-sm leading-none">↔</span>
          </div>
        </motion.div>

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

      <div className="border-t border-secondary/15 px-4 py-3">
        <p className="font-semibold text-primary">{title}</p>
        <p className="text-sm text-secondary">Drag slider to compare before and after</p>
      </div>
    </article>
  );
}
