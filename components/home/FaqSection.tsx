import { FaqItem } from "./types";

type FaqSectionProps = {
  faqs: FaqItem[];
};

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="border-t border-primary/10 bg-gradient-to-b from-white via-primary/2 to-white py-6 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="space-y-3 mb-8">
          <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Frequently Asked</span>
            <br className="hidden sm:block" />
            Questions
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
            Find answers to common questions about our roofing services, processes, and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={item.question}
              style={{ animationDelay: `${idx * 50}ms` }}
              className="group rounded-xl border border-primary/15 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-white shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/40 animate-in fade-in slide-in-from-bottom-2 duration-700 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer p-6 font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-300 flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 text-primary group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 border-t border-primary/10">
                <p className="text-secondary/70 leading-relaxed text-base group-hover:text-secondary/80 transition-colors duration-300">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
