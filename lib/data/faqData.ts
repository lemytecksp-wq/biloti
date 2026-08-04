export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const homepageFaqs: FAQItem[] = [
  {
    question: "Do you offer one-off and regular cleaning?",
    answer: "Yes, Biloti Property Care provides both one-off deep cleans (such as end of tenancy cleans, post-construction cleans, or seasonal spring washing) and regular recurring maintenance schedules (daily, weekly, fortnightly, or monthly)."
  },
  {
    question: "Can you provide a free quote?",
    answer: "Absolutely! We offer free, no-obligation quotes for all residential and commercial services across Greater Auckland. You can complete our online quote form or call our team directly on 021 745 179."
  },
  {
    question: "How quickly can cleaning start?",
    answer: "We strive to accommodate urgent requests whenever possible. In many cases, we can arrange site visits and commence work within 24 to 48 hours of quote confirmation."
  },
  {
    question: "Do you clean offices after business hours?",
    answer: "Yes, we offer flexible commercial cleaning schedules including early mornings, evenings after business hours, and weekends so your daily business operations remain uninterrupted."
  },
  {
    question: "Can you customise a cleaning schedule?",
    answer: "Definitely. Every property has unique requirements. We tailor custom cleaning plans, checklists, and service combinations to align perfectly with your budget, property size, and operational timing."
  }
];

export const generalFaqs: FAQItem[] = [
  ...homepageFaqs,
  {
    question: "Are your cleaning products safe for children, pets, and plants?",
    answer: "Yes. Biloti Property Care prioritises eco-friendly, biodegradable, and low-toxicity cleaning solutions whenever possible to protect your family, pets, staff, and surrounding garden landscapes."
  },
  {
    question: "What areas of New Zealand do you service?",
    answer: "We proudly service all of Greater Auckland, including Auckland Central, North Shore, West Auckland, South Auckland, East Auckland, Rodney, and Franklin districts."
  },
  {
    question: "Are Biloti staff trained and police checked?",
    answer: "Yes, all Biloti Property Care team members undergo background checks, comprehensive training, and strictly adhere to health and safety regulations on every job site."
  }
];
