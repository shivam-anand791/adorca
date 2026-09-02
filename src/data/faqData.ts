export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-timeline",
    question: "How soon can we expect measurable organic ranking and traffic improvements?",
    answer:
      "Most clients observe initial keyword velocity and indexation gains within 30 to 45 days. Substantial organic traffic scaling and high-intent keyword dominance typically compound between months 3 to 6, backed by our technical SEO sprint and continuous content optimization.",
  },
  {
    id: "faq-networks",
    question: "What affiliate & advertising networks do you integrate with for programmatic growth?",
    answer:
      "We integrate directly with premier inventory networks including Google Ads, Amazon Partner Network, Taboola, Outbrain, CJ Affiliate, ClickBank, and ShareASale. Our automated bidding pipelines dynamically allocate budget toward your highest ROAS channels.",
  },
  {
    id: "faq-attribution",
    question: "How is multi-touch attribution handled across international regions?",
    answer:
      "We implement server-side tracking pipelines with privacy-compliant first-party cookies and cross-channel multi-touch attribution models. You get unvarnished visibility into first-touch discovery, assisted clicks, and final conversion paths by geography and device.",
  },
  {
    id: "faq-pricing",
    question: "What does your typical engagement and pricing structure look like?",
    answer:
      "We offer both performance-aligned monthly retainer sprints and milestone-based growth contracts tailored to your current scale. Every proposal includes transparent deliverables, custom KPI benchmarks, and zero hidden markups.",
  },
  {
    id: "faq-ownership",
    question: "Do we retain full ownership of our data, audits, and analytics dashboards?",
    answer:
      "Yes, 100%. You retain full administrative ownership of all Google Search Console, Google Analytics 4, ad accounts, tag containers, custom Looker Studio dashboards, and keyword intelligence repositories we configure.",
  },
];
