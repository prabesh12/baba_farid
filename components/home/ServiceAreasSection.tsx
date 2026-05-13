type ServiceAreasSectionProps = {
  serviceAreas: string[];
};

export default function ServiceAreasSection({ serviceAreas }: ServiceAreasSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="space-y-4 mb-12">
        <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Service</span> Areas
        </h2>
        <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
          We service homeowners and property owners across Blacktown and surrounding Western Sydney suburbs.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {serviceAreas.map((area, idx) => (
          <div
            key={area}
            style={{ animationDelay: `${idx * 50}ms` }}
            className="group animate-in fade-in scale-95 duration-700"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-white to-primary/5 hover:from-primary/10 hover:to-primary/2 px-5 py-2.5 text-sm font-semibold text-secondary hover:text-primary transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:scale-110 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-150 transition-transform duration-300"></span>
              {area}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
