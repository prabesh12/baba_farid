import { ServiceItem } from "./types";

type EnquirySectionProps = {
  services: ServiceItem[];
};

export default function EnquirySection({ services }: EnquirySectionProps) {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";

  return (
    <section id="enquiry" className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Contact and Free Quote</h2>
          <p className="mt-3 text-secondary">
            Send your details and project notes. This form forwards directly to aman@babafaridroofing.com.
          </p>
          <div className="mt-6 rounded-xl bg-primary p-5 text-on-primary">
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="mt-2">
              Phone:{" "}
              <a href={phoneUrl} className="underline underline-offset-4 hover:text-white/80">
                0468 302 786
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={emailUrl} className="underline underline-offset-4 hover:text-white/80">
                aman@babafaridroofing.com
              </a>
            </p>
            <p>
              Address:{" "}
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-white/80">
                136 Fairwater boulevard, Blacktown, NSW 2148
              </a>
            </p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/xwvyaoeq"
          method="POST"
          className="space-y-4 rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm"
        >
          <input type="hidden" name="_subject" value="New Free Quote Enquiry - Baba Farid Roofing" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="block text-sm font-semibold text-secondary" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <label className="block text-sm font-semibold text-secondary" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <label className="block text-sm font-semibold text-secondary" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <label className="block text-sm font-semibold text-secondary" htmlFor="service">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          <label className="block text-sm font-semibold text-secondary" htmlFor="message">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-secondary/30 px-3 py-2 outline-none ring-primary focus:ring"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-5 py-3 font-semibold text-on-primary transition hover:bg-primary/90"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
