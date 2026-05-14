"use client";

import { motion } from "framer-motion";

type WhyChooseUsSectionProps = {
  restorationProcess: string[];
  installationProcess: string[];
};

export default function WhyChooseUsSection({ restorationProcess, installationProcess }: WhyChooseUsSectionProps) {
  const reasons = [
    { title: "Clear Communication", desc: "We explain the job, the materials, and the finish so customers know exactly what to expect." },
    { title: "Quality Workmanship", desc: "Every roof job is completed with care, from cleaning and repairs through to painting and installation." },
    { title: "Free Quote Process", desc: "Customers can request a free quote first, then we confirm scope, timing, and price before work begins." },
    { title: "Before and After Proof", desc: "We show completed work clearly so new visitors can see the standard of our roofing results." },
  ];

  return (
    <section id="process" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-6 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-8"
        >
          <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Choose Us</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
            Customers choose Baba Faarid Roofing for simple quotes, reliable scheduling, quality workmanship, and a clean finish on every project.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {reasons.map((reason, idx) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                scale: 1.01,
                boxShadow: "0 15px 25px -5px rgb(0 0 0 / 0.1)"
              }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.1,
                y: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white p-6 shadow-sm transition-[border-color,background-color] duration-300 hover:border-primary/40 will-change-transform cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-2 -mt-2"></div>

              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full group-hover:h-10 transition-all duration-300"></div>
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-secondary/70 leading-relaxed text-sm group-hover:text-secondary/80 transition-colors duration-300 ml-5">
                  {reason.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Process Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Restoration Process", steps: restorationProcess },
            { title: "Installation Process", steps: installationProcess },
          ].map((section, idx) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.6, 
                delay: (4 + idx) * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white shadow-sm hover:shadow-lg transition-[border-color,background-color] duration-300 hover:border-primary/40"
            >
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-accent/0"></div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    {section.title}
                  </h3>
                </div>

                <ol className="space-y-3">
                  {section.steps.map((step, stepIdx) => (
                    <li
                      key={step}
                      className="flex gap-3 items-start text-secondary/70 text-sm leading-relaxed group-hover:text-secondary/80 transition-colors duration-300"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 group-hover:bg-primary/40 flex items-center justify-center text-xs font-bold text-primary transition-colors duration-300">
                        {stepIdx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
