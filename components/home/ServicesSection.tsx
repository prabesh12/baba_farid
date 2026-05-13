import { ServiceItem } from "./types";

type ServicesSectionProps = {
  services: ServiceItem[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Services Overview</h2>
      <p className="mt-3 max-w-3xl text-secondary">
        The services below are the core jobs customers ask us for most often, with clear solutions for roof condition, drainage, and street appeal.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-xl border border-secondary/25 bg-surface/90 px-5 py-4 text-secondary transition hover:-translate-y-1 hover:border-primary"
          >
            <h3 className="font-semibold text-primary">{service.title}</h3>
            <p className="mt-2 text-sm">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
