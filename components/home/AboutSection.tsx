export default function AboutSection() {
  const values = [
    { label: "Quality", icon: "✓" },
    { label: "Reliability", icon: "✓" },
    { label: "Transparency", icon: "✓" },
    { label: "Local Expertise", icon: "✓" },
  ];

  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="space-y-3 mb-8">
        <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Baba Farid Roofing</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <div className="group rounded-xl border border-primary/15 bg-gradient-to-br from-white to-primary/2 p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-1 h-24 bg-gradient-to-b from-primary to-primary/50 rounded-full group-hover:h-28 transition-all duration-300"></div>
            <div>
              <p className="text-lg leading-relaxed text-secondary/80 group-hover:text-secondary/90 transition-colors duration-300">
                Baba Farid Roofing provides reliable roofing services across NSW with a strong focus on quality, durable materials, and clean workmanship. From leak repairs to full restorations, each project is completed with attention to detail and clear communication.
              </p>
            </div>
          </div>
        </div>

        <div className="group rounded-xl border border-primary/15 bg-gradient-to-br from-white to-accent/2 p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-1 h-24 bg-gradient-to-b from-accent to-accent/50 rounded-full group-hover:h-28 transition-all duration-300"></div>
            <div>
              <p className="text-lg leading-relaxed text-secondary/80 group-hover:text-secondary/90 transition-colors duration-300">
                Our team handles installation of gutters, fascia, whirlybird, skylights, gutter guards, and solar mesh systems to improve roof performance and property protection in all seasons.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Our Core Values</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map((value, idx) => (
            <div
              key={value.label}
              style={{ animationDelay: `${idx * 100}ms` }}
              className="group relative overflow-hidden rounded-lg border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in scale-95 duration-700"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-300"></div>
              <div className="relative">
                <p className="text-3xl font-bold text-primary group-hover:scale-125 transition-transform duration-300 mb-2">
                  {value.icon}
                </p>
                <p className="font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {value.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
