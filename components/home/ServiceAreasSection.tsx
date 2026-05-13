type ServiceAreasSectionProps = {
  serviceAreas: string[];
};

export default function ServiceAreasSection({ serviceAreas }: ServiceAreasSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Service Areas</h2>
      <p className="mt-3 max-w-3xl text-secondary">
        We service homeowners and property owners across Blacktown and surrounding Western Sydney suburbs.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {serviceAreas.map((area) => (
          <span key={area} className="rounded-full border border-secondary/25 bg-surface px-4 py-2 text-sm text-secondary">
            {area}
          </span>
        ))}
      </div>
    </section>
  );
}
