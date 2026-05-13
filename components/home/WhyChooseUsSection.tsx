type WhyChooseUsSectionProps = {
  restorationProcess: string[];
  installationProcess: string[];
};

export default function WhyChooseUsSection({ restorationProcess, installationProcess }: WhyChooseUsSectionProps) {
  return (
    <section id="process" className="border-y border-secondary/20 bg-surface/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Why Choose Us</h2>
        <p className="mt-2 max-w-3xl text-secondary">
          Customers choose Baba Farid Roofing for simple quotes, reliable scheduling, quality workmanship, and a clean finish on every project.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Clear Communication</h3>
            <p className="mt-3 text-sm text-secondary">
              We explain the job, the materials, and the finish so customers know exactly what to expect.
            </p>
          </article>
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Quality Workmanship</h3>
            <p className="mt-3 text-sm text-secondary">
              Every roof job is completed with care, from cleaning and repairs through to painting and installation.
            </p>
          </article>
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Free Quote Process</h3>
            <p className="mt-3 text-sm text-secondary">
              Customers can request a free quote first, then we confirm scope, timing, and price before work begins.
            </p>
          </article>
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Before and After Proof</h3>
            <p className="mt-3 text-sm text-secondary">
              We show completed work clearly so new visitors can see the standard of our roofing results.
            </p>
          </article>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Restoration Process</h3>
            <ol className="mt-4 space-y-2 text-sm text-secondary">
              {restorationProcess.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
          <article className="rounded-xl border border-secondary/25 bg-white p-5">
            <h3 className="font-heading text-2xl uppercase text-primary">Installation Process</h3>
            <ol className="mt-4 space-y-2 text-sm text-secondary">
              {installationProcess.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
