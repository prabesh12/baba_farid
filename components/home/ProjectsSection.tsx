import TapRevealSlider from "./TapRevealSlider";
import { PortfolioItem } from "./types";

type ProjectsSectionProps = {
  portfolio: PortfolioItem[];
};

export default function ProjectsSection({ portfolio }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="font-heading text-4xl uppercase tracking-wide text-primary">Recent Projects</h2>
      <p className="mt-2 text-secondary">Use the interactive split slider on each card to compare before and after images.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {portfolio.map((job) => (
          <TapRevealSlider key={job.title} before={job.before} after={job.after} title={job.title} />
        ))}
      </div>
    </section>
  );
}
