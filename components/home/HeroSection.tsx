export default function HeroSection() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-6 md:py-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div className="space-y-8">
        <div className="space-y-1 animate-in fade-in slide-in-from-left-4 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-primary hover:bg-primary/12 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Local and Trusted Roofers
          </p>
        </div>

        <h1 className="font-heading text-6xl md:text-7xl leading-tight text-secondary animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
          Strong Roofing
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Better First Impression</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-secondary/80 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
          Baba Faarid Roofing helps homeowners improve roof strength, street appeal, and long-term protection with restoration and complete roofline installations.
        </p>

        <ul className="space-y-3 text-base font-semibold text-secondary/70 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
          {["Free quotes and site inspections", "Quality workmanship on every job", "Trusted local roofers for Sydney homes"].map((item, idx) => (
            <li key={item} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-primary/70"></span>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={phoneUrl}
          className="block rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 px-4 py-3 md:px-6 md:py-4 text-center text-sm md:text-lg font-bold uppercase tracking-wider text-on-primary hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all animate-in fade-in slide-in-from-left-4 duration-700 delay-400 group"
        >
          <span className="inline-flex items-center gap-2">
            Call Now: 0468 302 786
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </a>
      </div>

      <div className="group rounded-2xl border border-primary/15 bg-gradient-to-br from-white/60 to-primary/3 p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all animate-in fade-in slide-in-from-right-4 duration-700 delay-200 backdrop-blur-sm">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>

        <div className="relative space-y-6">
          {/* Header Accent */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Get in Touch</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-tight text-secondary leading-tight">
              Get Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Roof Quote</span>
            </h3>
            <p className="text-secondary/70 leading-relaxed">
              Contact us today for a free inspection and quote. We handle roof restoration, gutters, fascia, whirlybirds, skylights, gutter guards, and solar mesh installation.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 pt-2">
            {/* Email */}
            <div className="group/item hover:bg-primary/5 px-4 py-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
              <p className="font-semibold text-secondary text-xs mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </p>
              <a href={emailUrl} className="text-primary hover:text-primary/80 transition-colors font-semibold text-sm break-all">
                aman@babafaridroofing.com
              </a>
            </div>

            {/* Phone */}
            <div className="group/item hover:bg-primary/5 px-4 py-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
              <p className="font-semibold text-secondary text-xs mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </p>
              <a href={phoneUrl} className="text-primary hover:text-primary/80 transition-colors font-semibold text-sm">
                0468 302 786
              </a>
            </div>

            {/* Address */}
            <div className="group/item hover:bg-primary/5 px-4 py-3 rounded-lg transition-all duration-300 border border-transparent hover:border-primary/20">
              <p className="font-semibold text-secondary text-xs mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address
              </p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors text-sm leading-relaxed">
                136 Fairwater Boulevard, Blacktown, NSW 2148
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
            <a
              href="https://wa.me/61468302786"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[100px] rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 text-center text-xs font-bold text-white hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.955 1.313c-1.527.808-2.846 1.904-3.916 3.174-1.077 1.276-1.89 2.738-2.369 4.322-.48 1.584-.516 3.205-.106 4.332.41 1.127 1.147 2.537 2.222 3.957.526.695.905 1.18 1.122 1.435.216.255.42.512.614.768.793-.992 1.567-2.028 2.322-3.104 1.01-1.404 1.899-2.742 2.633-4.08 1.562-2.876 2.273-5.665 2.088-8.304-.185-2.639-1.122-5.021-2.619-6.86-.75-.889-1.56-1.64-2.413-2.195zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/share/18arkCBimh/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[100px] rounded-lg border-2 border-primary px-4 py-3 text-center text-xs font-bold text-primary hover:bg-primary/10 transition-all hover:scale-105"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/babafarid__roofing?igsh=YngweGhzenY5cHFk&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[100px] rounded-lg border-2 border-primary px-4 py-3 text-center text-xs font-bold text-primary hover:bg-primary/10 transition-all hover:scale-105"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
