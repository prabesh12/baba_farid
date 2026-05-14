export default function HeroSection() {
  const phoneUrl = "tel:+61468302786";

  return (
    <section 
      className="relative w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://babafaridroofing.linearwebsolutions.com.au/images/gallery2.jpg)',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 h-full flex flex-col justify-center items-start py-12 md:py-24">
        <div className="space-y-8 max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700">
          {/* Badge */}
          <div className="space-y-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white hover:bg-white/20 transition-colors backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Local and Trusted Roofers
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-7xl leading-tight text-white">
            Strong Roofing
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-white">Better First Impression</span>
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed text-white/90 max-w-xl">
            Baba Faarid Roofing helps homeowners improve roof strength, street appeal, and long-term protection with restoration and complete roofline installations.
          </p>

          {/* Features List */}
          <ul className="space-y-3 text-base font-semibold text-white/80">
            {["Free quotes and site inspections", "Quality workmanship on every job", "Trusted local roofers for Sydney homes"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-white"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={phoneUrl}
            className="inline-block rounded-xl bg-gradient-to-r from-accent via-accent to-accent/90 px-6 py-4 text-sm md:text-lg font-bold uppercase tracking-wider text-white hover:shadow-2xl hover:shadow-accent/40 hover:scale-105 transition-all group"
          >
            <span className="inline-flex items-center gap-2">
              Call Now: 0468 302 786
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
