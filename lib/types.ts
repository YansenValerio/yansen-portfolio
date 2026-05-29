export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface PortfolioItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  liveUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
}

export interface Achievement {
  year: string;
  rank: string;
  title: string;
  organization: string;
}
