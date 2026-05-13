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
    <section id="process" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-3 mb-8">
          <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Choose Us</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
            Customers choose Baba Faarid Roofing for simple quotes, reliable scheduling, quality workmanship, and a clean finish on every project.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {reasons.map((reason, idx) => (
            <article
              key={reason.title}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group relative overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-700"
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
            </article>
          ))}
        </div>

        {/* Process Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Restoration Process", steps: restorationProcess },
            { title: "Installation Process", steps: installationProcess },
          ].map((section, idx) => (
            <article
              key={section.title}
              style={{ animationDelay: `${(4 + idx) * 100}ms` }}
              className="group overflow-hidden rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 animate-in fade-in slide-in-from-bottom-4 duration-700"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
