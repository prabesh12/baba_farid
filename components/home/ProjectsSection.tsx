import TapRevealSlider from "./TapRevealSlider";
import { PortfolioItem } from "./types";

type ProjectsSectionProps = {
  portfolio: PortfolioItem[];
};

export default function ProjectsSection({ portfolio }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
      <div className="space-y-3 mb-8">
        <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tight text-secondary">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Recent</span> Projects
        </h2>
        <p className="text-lg text-secondary/70 max-w-2xl leading-relaxed">
          Use the interactive split slider on each card to compare before and after images of our completed restoration work.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.map((job, idx) => (
          <div
            key={job.title}
            style={{ animationDelay: `${idx * 100}ms` }}
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <TapRevealSlider before={job.before} after={job.after} title={job.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
