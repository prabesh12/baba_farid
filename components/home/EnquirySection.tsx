import { ServiceItem } from "./types";

type EnquirySectionProps = {
  services: ServiceItem[];
};

export default function EnquirySection({ services }: EnquirySectionProps) {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";

  const contactDetails = [
    { label: "Phone", value: "0468 302 786", href: phoneUrl },
    { label: "Email", value: "aman@babafaridroofing.com", href: emailUrl },
    { label: "Address", value: "136 Fairwater Boulevard, Blacktown NSW 2148", href: mapsUrl },
  ];

  return (
    <section id="enquiry" className="mx-auto w-full max-w-6xl px-6 py-6 md:py-12">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Contact</span> & Free Quote
            </h2>
            <p className="text-lg text-secondary/70 leading-relaxed">
              Send your details and project notes. This form forwards directly to aman@babafaridroofing.com.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-3">
            {contactDetails.map((detail, idx) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.label === "Address" ? "_blank" : undefined}
                rel={detail.label === "Address" ? "noreferrer" : undefined}
                style={{ animationDelay: `${idx * 100}ms` }}
                className="group block rounded-xl border border-primary/15 bg-gradient-to-r from-primary/5 to-white hover:from-primary/10 hover:to-primary/5 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-x-1 animate-in fade-in slide-in-from-left-4 duration-700"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors duration-300 mb-1">
                  {detail.label}
                </p>
                <p className="text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                  {detail.value}
                </p>
              </a>
            ))}
          </div>

          {/* Accent Box */}
          <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 p-6">
            <p className="text-sm text-primary/80 leading-relaxed">
              <span className="font-bold text-primary">Quick Response:</span> We typically respond to enquiries within 24 hours. Send your project details and we'll schedule a free onsite inspection.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <form
          action="https://formspree.io/f/xwvyaoeq"
          method="POST"
          className="space-y-5 rounded-2xl border border-primary/15 bg-gradient-to-br from-white to-primary/2 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <input type="hidden" name="_subject" value="New Free Quote Enquiry - Baba Farid Roofing" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Name Field */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="Your name"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="0468 302 786"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="your@email.com"
            />
          </div>

          {/* Service Select */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="service">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-xs md:text-sm font-bold uppercase tracking-widest text-secondary mb-2" htmlFor="message">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-primary/20 bg-white/80 px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-secondary outline-none resize-none transition-all duration-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 hover:border-primary/40"
              placeholder="Describe your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/90 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-bold uppercase tracking-widest text-on-primary hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
          >
            <span className="inline-flex items-center justify-center gap-2">
              Send Enquiry
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
