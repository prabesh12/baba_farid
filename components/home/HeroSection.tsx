import { portfolio } from "./constants";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] lg:gap-12">
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
          className="block rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 px-6 py-4 text-center text-lg font-bold uppercase tracking-wider text-on-primary hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all animate-in fade-in slide-in-from-left-4 duration-700 delay-400 group"
        >
          <span className="inline-flex items-center gap-2">
            Call Now: 0468 302 786
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </a>
      </div>

      <div className="group rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-primary/2 p-8 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
        
        <div className="relative">
          <div className="mb-2 h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          
          <p className="font-heading text-4xl md:text-3xl uppercase tracking-tight text-primary mb-4">
            Fast Quotes. Clean Work. Real Results.
          </p>

          <p className="text-secondary/80 leading-relaxed mb-8">
            We handle roof restoration plus installation of gutters, fascia, whirlybird, skylight, gutter guards, and solar mesh with a focus on quality and durability.
          </p>

          <div className="space-y-3 mb-6 text-sm">
            <div className="group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
              <p className="font-semibold text-secondary text-xs">Email</p>
              <a href={emailUrl} className="text-primary hover:text-primary/80 transition-colors text-sm">
                aman@babafaridroofing.com
              </a>
            </div>

            <div className="group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
              <p className="font-semibold text-secondary text-xs">Phone</p>
              <a href={phoneUrl} className="text-primary hover:text-primary/80 transition-colors font-semibold text-sm">
                0468 302 786
              </a>
            </div>

            <div className="group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
              <p className="font-semibold text-secondary text-xs">Address</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors text-xs leading-relaxed">
                136 Fairwater Boulevard, Blacktown, NSW 2148
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/61468302786"
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-xs font-bold text-on-primary hover:bg-primary/90 hover:shadow-lg transition-all hover:scale-105"
            >
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/share/18arkCBimh/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg border border-primary/30 px-4 py-2 text-center text-xs font-bold text-primary hover:bg-primary/10 transition-all"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/babafarid__roofing?igsh=YngweGhzenY5cHFk&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg border border-primary/30 px-4 py-2 text-center text-xs font-bold text-primary hover:bg-primary/10 transition-all"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full mt-8">
        <ImageCarousel 
          images={portfolio.map((item) => ({
            src: item.after,
            alt: item.title,
          }))} 
        />
      </div>
    </section>
  );
}
