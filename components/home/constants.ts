import { FaqItem, PortfolioItem, ServiceItem } from "./types";
import portfolioImages from "./portfolioImages.json";

export const services: ServiceItem[] = [
  {
    title: "Roof Restoration",
    description: "Pressure cleaning, repointing, rebedding ridge caps, and roof painting for a stronger finish.",
  },
  {
    title: "Gutter Installation",
    description: "New gutters and fascia systems that improve drainage and protect your property.",
  },
  {
    title: "Fascia Installation",
    description: "Clean, durable fascia installation for a neater roofline and better weather protection.",
  },
  {
    title: "Whirlybird Installation",
    description: "Roof ventilation installation to improve airflow and help reduce roof heat buildup.",
  },
  {
    title: "Skylight Installation",
    description: "Professional skylight installation with a watertight finish and clean detailing.",
  },
  {
    title: "Gutter Guard Installation",
    description: "Gutter guard mesh installation to reduce blockages and improve water flow.",
  },
  {
    title: "Solar Mesh Installation",
    description: "Solar mesh installation to protect roof spaces from birds and debris intrusion.",
  },
];

export const serviceAreas = [
  "Blacktown",
  "Seven Hills",
  "Parramatta",
  "Penrith",
  "Liverpool",
  "Mt Druitt",
  "Western Sydney",
  "Greater Sydney",
];

export const restorationProcess = [
  "Roof inspection and condition report",
  "Pressure cleaning to remove dirt, moss, and buildup",
  "Repointing for stronger joints and weather resistance",
  "Rebedding ridge caps where needed",
  "Roof painting and protective finishing",
  "Final quality check and handover",
];

export const installationProcess = [
  "Site measure and materials planning",
  "Safe removal of damaged components",
  "New gutter, fascia, whirlybird, or skylight installation",
  "Gutter guard and solar mesh fitting",
  "Water-flow and weatherproofing tests",
  "Final cleanup and completion photos",
];

export const faqs: FaqItem[] = [
  {
    question: "How quickly can you start after inspection?",
    answer:
      "Most projects are scheduled within a few days after quote approval, depending on weather and material availability.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes. We provide free on-site assessments and clear fixed quotes before any work begins.",
  },
  {
    question: "Can you repair leaks and restore the full roof together?",
    answer:
      "Yes. We can handle both targeted leak repairs and complete roof restoration as one project.",
  },
  {
    question: "Do you work on both residential and commercial roofs?",
    answer:
      "Yes. We work on homes, duplexes, and selected commercial properties across NSW.",
  },
];

export const portfolio: PortfolioItem[] = portfolioImages;
