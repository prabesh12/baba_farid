import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneUrl = "tel:+61468302786";
  const emailUrl = "mailto:aman@babafaridroofing.com";
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=136+Fairwater+Boulevard,+Blacktown,+NSW+2148";
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4689486445277!2d150.90698!3d-33.77169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a26f8e1f1f1f%3A0x1f1f1f1f1f1f1f1f!2s136%20Fairwater%20Boulevard%2C%20Blacktown%20NSW%202148!5e0!3m2!1sen!2sau!4v1234567890";

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { label: "WhatsApp", href: "https://wa.me/61468302786", icon: "💬" },
    { label: "Facebook", href: "https://www.facebook.com/share/18arkCBimh/?mibextid=wwXIfr", icon: "f" },
    { label: "Instagram", href: "https://www.instagram.com/babafarid__roofing?igsh=YngweGhzenY5cHFk&utm_source=qr", icon: "📷" },
  ];

  return (
    <footer className="border-t border-primary/10 bg-white/100">
      {/* Map Section */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-tight text-secondary mb-6">
          Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Us</span>
        </h3>
        <div className="group rounded-xl overflow-hidden border border-primary/15 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40">
          <iframe
            src={mapsEmbedUrl}
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo.jpeg"
                alt="Baba Faarid Roofing logo"
                width={200}
                height={200}
                className="rounded-lg object-cover w-20 h-20"
              />
              <div>
                <p className="font-heading font-bold text-primary">Baba Faarid</p>
                <p className="text-xs text-secondary/60">Roof Restoration</p>
              </div>
            </div>
            <p className="text-sm text-secondary/70 leading-relaxed">
              Professional roofing services across NSW with quality workmanship and reliable scheduling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading font-bold text-secondary mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-heading font-bold text-secondary mb-4">Services</p>
            <ul className="space-y-2 text-sm text-secondary/70">
              <li className="hover:text-primary transition-colors duration-300 cursor-default">Roof Restoration</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-default">Roof Repairs</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-default">Gutter Installation</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-default">Solar Mesh</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-bold text-secondary mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href={phoneUrl} className="text-sm text-primary hover:text-primary/80 transition-colors duration-300 font-semibold">
                  0468 302 786
                </a>
              </li>
              <li>
                <a href={emailUrl} className="text-sm text-secondary/70 hover:text-primary transition-colors duration-300">
                  aman@babafaridroofing.com
                </a>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-secondary/70 hover:text-primary transition-colors duration-300"
                >
                  Blacktown, NSW 2148
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-xs text-secondary/60">
              © {currentYear} Baba Faarid Roofing. All rights reserved.
            </p>
            <p className="text-xs text-secondary/50">
              Professional Roofing Services | NSW-Licensed | Free Quotes Available
            </p>
            <p className="text-xs text-secondary/50">
              Developed by <a href="https://logicminers.com" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors">Logic Miners</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-secondary/60">Follow Us</p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/61468302786"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 text-primary"
                aria-label="WhatsApp"
              >
                <span className="text-lg">💬</span>
              </a>
              <a
                href="https://www.facebook.com/share/18arkCBimh/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 text-primary font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com/babafarid__roofing?igsh=YngweGhzenY5cHFk&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-110 text-primary"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
