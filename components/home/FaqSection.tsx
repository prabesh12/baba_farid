import { FaqItem } from "./types";

type FaqSectionProps = {
  faqs: FaqItem[];
};

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="border-y border-secondary/20 bg-surface/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Frequently Asked Questions</h2>
        <div className="mt-7 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-xl border border-secondary/20 bg-white px-5 py-4">
              <summary className="cursor-pointer font-semibold text-primary">{item.question}</summary>
              <p className="mt-3 text-sm text-secondary">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
