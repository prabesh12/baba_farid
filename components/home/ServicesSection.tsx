"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "./types";

type ServicesSectionProps = {
  services: ServiceItem[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="no-css-animate mx-auto w-full max-w-6xl px-6 py-6 md:py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-3 mb-8"
      >
        <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Services</span> Overview
        </h2>
        <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
          The services below are the core jobs customers ask us for most often, with clear solutions for roof condition, drainage, and street appeal.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            transition={{ 
              duration: 0.5, 
              delay: idx * 0.1,
              y: { type: "spring", stiffness: 300, damping: 20 },
              scale: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="no-css-animate group relative rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white px-6 py-6 shadow-sm transition-[border-color,background-color] duration-300 hover:border-primary/40 will-change-transform cursor-pointer"
          >
            {/* Animated left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Accent dot */}
            <div className="mb-4 flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.5 }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-transform duration-300"
              ></motion.div>
              <h3 className="font-heading text-xl font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                {service.title}
              </h3>
            </div>

            <p className="text-secondary/70 text-sm leading-relaxed group-hover:text-secondary/80 transition-colors duration-300">
              {service.description}
            </p>

            {/* Bottom accent bar */}
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full"></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
