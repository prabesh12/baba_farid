"use client";

export default function LocationMap() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="space-y-3 mb-8">
        <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Location</span>
        </h2>
        <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
          Visit us at our Blacktown office. We service all of Western Sydney and surrounding areas.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="group rounded-xl border border-primary/15 bg-gradient-to-br from-white to-primary/2 p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">Baba Farid Roofing</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-1">Address</p>
                <p className="text-lg font-semibold text-secondary">
                  136 Fairwater Boulevard<br />
                  Blacktown, NSW 2148
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-1">Phone</p>
                <a href="tel:+61468302786" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                  0468 302 786
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary/60 mb-1">Email</p>
                <a href="mailto:aman@babafaridroofing.com" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                  aman@babafaridroofing.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-primary/10">
              <p className="text-sm text-secondary/70 mb-4">Open Monday to Sunday</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-on-primary hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105"
              >
                <span>Open in Google Maps</span>
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="group rounded-xl overflow-hidden border border-primary/15 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4689486445277!2d150.90698!3d-33.77169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a26f8e1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s136%20Fairwater%20Boulevard%2C%20Blacktown%20NSW%202148!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
