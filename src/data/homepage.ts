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

export const platforms = [
  { name: 'Google', asset: 'google.webp' },
  { name: 'Microsoft', asset: 'microsoft.svg' },
  { name: 'Databricks', asset: 'databricks.svg' },
  { name: 'NVIDIA', asset: 'nvidia.webp' },
  { name: 'Kubernetes', asset: 'kubernetes.webp' },
  { name: 'AWS', asset: 'aws.webp' },
  { name: 'Azure', asset: 'azure.webp' },
  { name: 'GitHub', asset: 'github.svg' },
] as const;

export const ecosystemPlatforms = [
  ...platforms,
  { name: 'Docker', asset: 'docker.svg' },
  { name: 'Terraform', asset: 'terraform.svg' },
  { name: 'PostgreSQL', asset: 'postgresql.svg' },
  { name: 'Snowflake', asset: 'snowflake.svg' },
] as const;
export const scenarios = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    title: 'Make operational information easier to use.',
    description:
      'Bring scheduling, administration and reporting into a clearer workflow. Start by mapping access needs, data flows and the handoffs that delay everyday work.',
    focus: 'Workflow mapping · System integration · Access controls',
    image: 'healthcare-context',
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'Give an internal application a better foundation.',
    description:
      'Review an application that has become difficult to change. Plan improvements to its integrations, testing and deployment process around the controls your business requires.',
    focus: 'Application modernization · Quality engineering · Cloud delivery',
    image: 'finance-context',
  },
  {
    id: 'retail',
    label: 'Retail',
    title: 'Connect order, stock and customer information.',
    description:
      'Consider how orders, stock and customer information move between systems. Define the integrations and reporting needed to reduce repeated entry and help teams handle exceptions.',
    focus: 'Business integration · Automation · Reporting',
    image: 'retail-context',
  },
] as const;
export const expertise = [
  {
    title: 'Cloud & operations',
    description:
      'Infrastructure, deployment pipelines and the visibility needed to run them.',
    image: 'expert-cloud',
    tags: ['Cloud', 'Delivery operations'],
  },
  {
    title: 'Software engineering',
    description:
      'Applications shaped around users, maintainable code and dependable releases.',
    image: 'expert-engineering',
    tags: ['Applications', 'Integration'],
  },
  {
    title: 'Data & applied AI',
    description:
      'Reliable data foundations and AI evaluated against a specific business use.',
    image: 'expert-data',
    tags: ['Data platforms', 'Applied AI'],
  },
  {
    title: 'Quality & resilience',
    description:
      'Testing, access reviews and recovery planning built into the delivery conversation.',
    image: 'expert-quality',
    tags: ['Quality', 'Resilience'],
  },
] as const;
export const guidance = [
  {
    id: 'scope',
    category: 'Technology planning',
    title: 'Define the problem before choosing the platform.',
    description: 'A clear brief makes technology decisions easier to evaluate.',
    paragraphs: [
      'Describe the task that needs to improve, who performs it and what gets in the way. Include the systems involved and any constraints on access, timing or budget.',
      'Separate essential outcomes from useful additions. Agree how you will assess the change, then compare platforms against those needs, integration requirements and ongoing maintenance.',
      'For an initial conversation, a short process outline and a list of existing tools are more useful than a predetermined solution.',
    ],
  },
  {
    id: 'teams',
    category: 'Team planning',
    title: 'Choose an engagement that fits the work.',
    description:
      'Match ownership and working arrangements to the support you need.',
    paragraphs: [
      'Staff augmentation adds specialist capacity to a team you manage. Permanent hiring fills an ongoing role within your organization. A dedicated team brings a defined group of skills to a longer delivery effort.',
      'Before choosing, clarify who owns priorities, reviews work and supports onboarding. Consider the skills required, expected duration, communication schedule and access to your systems.',
      'Share the role or project brief by email so the working arrangement can be discussed alongside the technical requirement.',
    ],
  },
  {
    id: 'systems',
    category: 'Delivery planning',
    title: 'Plan the handover while you plan the build.',
    description:
      'Keep the delivered system understandable for the people who will operate it.',
    paragraphs: [
      'Identify the team that will maintain the system and the knowledge they will need. Include deployment instructions, configuration guidance, dependencies and recovery steps in the scope.',
      'Use review points during delivery to explain decisions and collect questions. Documentation is easier to maintain when it develops alongside the work.',
      'At handover, check that the receiving team can access the relevant materials and understands the operating responsibilities.',
    ],
  },
] as const;
