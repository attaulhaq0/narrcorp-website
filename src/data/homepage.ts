export const contact = {
  email: 'hr@narrcorp.com',
  href: 'mailto:hr@narrcorp.com',
};
export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Narrcorp', href: '#why-narrcorp' },
] as const;

interface Offering {
  title: string;
  description: string;
}
export const services: readonly Offering[] = [
  {
    title: 'Technology strategy and roadmaps',
    description:
      'Bring clarity to the next decision. Review your current systems, identify constraints and set a realistic sequence for improvements, budgets and delivery priorities.',
  },
  {
    title: 'Workflow automation',
    description:
      'Reduce the repetitive work between systems and teams. Design practical workflows for approvals, document handling, notifications and routine tasks, with human review where it matters.',
  },
  {
    title: 'Digital products and customer experiences',
    description:
      'Create digital experiences that make a task easier. Plan and build websites, customer portals, internal tools and applications around the people who use them.',
  },
  {
    title: 'Connected business systems',
    description:
      'Help information move where it needs to go. Connect business applications through APIs and integrations, and improve the workflows around CRM, ERP and existing enterprise platforms.',
  },
  {
    title: 'Data, analytics and applied AI',
    description:
      'Make information easier to trust and use. Develop data pipelines, reporting and dashboards, then explore focused AI applications such as knowledge search or document assistance where the use case supports them.',
  },
  {
    title: 'Cloud platforms and delivery operations',
    description:
      'Prepare the environment for dependable delivery. Plan cloud changes, automate infrastructure and deployments, and improve visibility into application performance and operating needs.',
  },
  {
    title: 'Quality, security and resilience',
    description:
      'Address reliability throughout the work. Strengthen testing, review access and application risks, and plan recovery and maintenance around the systems your business depends on.',
  },
  {
    title: 'Specialist teams and delivery support',
    description:
      'Bring in expertise around a defined need. Explore staff augmentation, permanent hiring or a dedicated engineering team, with responsibilities and handover expectations agreed from the start.',
  },
];
export const principles: readonly Offering[] = [
  {
    title: 'Clear decisions before development',
    description:
      'Agree on the problem, the scope and what a useful result looks like before committing to the build.',
  },
  {
    title: 'Solutions that fit the work',
    description:
      'Choose tools and workflows around your existing environment and the people who will use them.',
  },
  {
    title: 'Operations considered from the start',
    description:
      'Include testing, documentation, maintenance and handover in the delivery plan.',
  },
  {
    title: 'Expertise shaped around the need',
    description:
      'Match the engagement to the work: focused advice, a delivery project or additional specialist capacity.',
  },
];
export const homepage = {
  title: 'Narrcorp | Technology consulting & digital engineering',
  description:
    'Simplify operations, build useful digital experiences and plan your next technology investment with Narrcorp. Explore consulting, engineering and specialist team services.',
  hero: {
    headline: 'Turn business complexity into',
    emphasis: 'practical progress.',
    description:
      'Simplify everyday operations, create useful digital experiences and plan your next technology investment. Narrcorp brings strategy, engineering and specialist expertise to the work that matters to your business.',
    primaryAction: 'Start a conversation',
    secondaryAction: 'Discover our services',
  },
  about: {
    headline: 'Start with the business. Build what makes a difference.',
    paragraphs: [
      'Your next challenge may be a slow process, an ageing application or information spread across too many systems. Choosing another tool is only part of the answer.',
      'Narrcorp’s approach begins with understanding how the work gets done, where it breaks down and what needs to improve. From there, we help shape a practical scope, choose the right technology and bring together the expertise to deliver it.',
      'The focus is on solutions your people can use, your systems can support and your business can continue to develop.',
    ],
  },
  services: {
    headline: 'Practical support for your next priority.',
    description:
      'Start with a focused need or plan a broader change. Explore how we can support your next priority.',
  },
  why: { headline: 'A clear approach to work that can get complicated.' },
  cta: {
    headline: 'What is getting in the way of your next step?',
    description:
      'Tell us what you want to improve, what you have in place and where you need support. We can start with a conversation about the work ahead.',
    action: 'Email Narrcorp',
  },
} as const;
