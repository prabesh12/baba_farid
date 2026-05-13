export default function HeroSection() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-20">
      <div className="space-y-6">
        <p className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Local and Trusted Roofers
        </p>
        <h1 className="font-heading text-5xl leading-[0.95] text-secondary md:text-5xl">
          Strong Roofing
          <br />
          Better First Impression
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-secondary">
          Baba Farid Roofing helps homeowners improve roof strength, street appeal, and long-term protection with restoration and complete roofline installations.
        </p>
        <ul className="space-y-3 text-lg font-semibold text-secondary">
          <li>Free quotes and site inspections</li>
          <li>Quality workmanship on every job</li>
          <li>Trusted local roofers for Sydney homes</li>
        </ul>
        <a
          href={phoneUrl}
          className="block rounded-xl bg-primary px-5 py-4 text-center text-xl font-bold uppercase tracking-wider text-on-primary md:text-2xl"
        >
          Call Today For A Free Quote: 0468 302 786
        </a>
      </div>

      <div className="rounded-3xl border border-secondary/20 bg-surface/90 p-6 shadow-xl">
        <p className="font-heading text-3xl uppercase tracking-wide text-primary">Fast Quotes. Clean Work. Real Results.</p>
        <p className="mt-4 text-secondary">
          We handle roof restoration plus installation of gutters, fascia, whirlybird, skylight, gutter guards, and solar mesh with a focus on quality and durability.
        </p>
        <div className="mt-6 space-y-3 text-sm">
          <p>
            <strong>Email:</strong>{" "}
            <a href={emailUrl} className="underline decoration-primary/40 underline-offset-4 hover:text-primary">
              aman@babafaridroofing.com
            </a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="underline decoration-primary/40 underline-offset-4 hover:text-primary">
              136 Fairwater boulevard, Blacktown, NSW 2148
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={phoneUrl} className="underline decoration-primary/40 underline-offset-4 hover:text-primary">
              0468 302 786
            </a>
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <a href="https://wa.me/61468302786" target="_blank" rel="noreferrer" className="rounded-full bg-primary px-4 py-2 text-on-primary hover:bg-primary/90">
            WhatsApp Chat
          </a>
          <a
            href="https://www.facebook.com/share/18arkCBimh/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-secondary px-4 py-2 hover:bg-secondary hover:text-on-primary"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/babafarid__roofing?igsh=YngweGhzenY5cHFk&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-secondary px-4 py-2 hover:bg-secondary hover:text-on-primary"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
