export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceReview = {
  name: string;
  service: string;
  review: string;
  rating?: number;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PortfolioItem = {
  title: string;
  before: string;
  after: string;
};
