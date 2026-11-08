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
      'Decide what to change, in what order and why. Assess existing systems, compare options and build a roadmap with priorities, dependencies and budget considerations.',
  },
  {
    title: 'Workflow automation',
    description:
      'Replace repeated data entry and manual handoffs with connected workflows. Automate approvals, document routing and notifications, with review steps for decisions that need human judgment.',
  },
  {
    title: 'Software engineering and digital products',
    description:
      'Build applications around the tasks people need to complete. We design and develop websites, customer portals, internal tools and digital products, including improvements to existing software.',
  },
  {
    title: 'Business system integration',
    description:
      'Keep information consistent across the tools your teams use. Connect customer management, finance and other business applications through integrations and application programming interfaces (APIs).',
  },
  {
    title: 'Data, analytics and applied AI',
    description:
      'Bring data sources together for reporting and analysis. Develop pipelines and dashboards, and evaluate AI for defined uses such as internal knowledge search and document processing.',
  },
  {
    title: 'Cloud platforms and delivery operations',
    description:
      'Prepare cloud environments for deployment and ongoing operation. Plan migrations, automate infrastructure and releases, and establish monitoring to support maintenance and troubleshooting.',
  },
  {
    title: 'Quality, security and resilience',
    description:
      'Assess how applications behave, who can access them and how they recover. Use testing, access reviews and recovery planning to address reliability and security risks.',
  },
  {
    title: 'Technology staffing and dedicated teams',
    description:
      'Add the skills your project or team needs through staff augmentation, permanent hiring or a dedicated engineering team. Agree on the role, working arrangement and onboarding needs before the engagement begins.',
  },
];
export const principles: readonly Offering[] = [
  {
    title: 'Scope you can evaluate',
    description:
      'Agree on priorities, deliverables and responsibilities so you can assess the plan before delivery begins.',
  },
  {
    title: 'Tools that fit your environment',
    description:
      'Evaluate technology against your existing systems, integration needs and maintenance capacity.',
  },
  {
    title: 'Visibility through delivery',
    description:
      'Set review points to discuss progress, surface issues and make decisions as the work develops.',
  },
  {
    title: 'An organized handover',
    description:
      'Include documentation, operating guidance and knowledge transfer for delivered systems so your team can maintain them.',
  },
];
export const homepage = {
  title: 'Narrcorp | Technology Consulting, Engineering & Talent',
  description:
    'Technology consulting, software engineering and staffing from Narrcorp. Explore cloud, data, automation and system integration for your next project.',
  hero: {
    headline: 'Turn business complexity into',
    emphasis: 'practical progress.',
    description:
      'Technology consulting, software engineering and specialist talent to improve how your business operates. Connect systems, modernize applications and simplify the workflows your teams rely on.',
    primaryAction: 'Email Narrcorp',
    secondaryAction: 'Explore services',
  },
  about: {
    headline: 'Close the gap between plans and operations.',
    paragraphs: [
      'A delayed approval, a disconnected application or an overloaded team can hold back a larger plan.',
      'Narrcorp brings technology advice and delivery expertise to these gaps. We review how your systems and workflows fit together, then define the improvements and skills the project needs.',
      'Whether the starting point is one process or a wider modernization effort, the scope follows your priorities and operating constraints.',
    ],
  },
  services: {
    headline: 'Technology and talent for better operations.',
    description:
      'Choose focused support for a specific challenge, or combine services across a larger project.',
  },
  why: { headline: 'Clarity from the first decision to handover.' },
  cta: {
    headline: 'Tell us where you need support.',
    description:
      'Email a brief outline of your project or hiring need, the systems or skills involved and your preferred timing. We’ll use it to discuss the next step.',
    action: 'Email Narrcorp',
  },
} as const;
