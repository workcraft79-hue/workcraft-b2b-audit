import { ServiceItem, ProcessStage } from './types';

export const WORKCRAFT_LOGO_LAPTOP = '/logo-laptop.png';
export const WORKCRAFT_LOGO_MOBILE = '/logo-mobile.png';
export const WORKCRAFT_LOGO_512 = '/logo-mobile.png';
export const WORKCRAFT_LOGO_1600 = '/logo-laptop.png';
export const FOUNDER_PORTRAIT = '/farhan-photo.jpg';

export const FOUNDER_QUOTE =
  "Most operational bottlenecks are not people problems, they are system design problems. I build automated AI workflows that fix the system so team can focuses on decisions.";

export const FOUNDER_INTRO =
  "WORKCRAFT is built around a practical principle: improve the workflow before choosing the technology. The focus is on identifying operational friction, designing clearer processes and applying AI-assisted automation where it is appropriate—with human oversight and clear responsibility.";

export const FOUNDER_BIO =
  "Farhan Abid designs operational infrastructure for modern B2B agencies. As the Founder of WorkCraft, he builds AI-powered work systems that turn chaotic back-office processes into clean, automated workflows.\n\nRather than chasing generic AI hype or deploying complex software that breaks existing tools, Farhan focuses on building reliable systems, ensuring every automated workflow runs with strict logic, careful data handling, and clear human oversight. His work helps leadership teams cut repetitive tasks and gain clear visibility over their daily operations.";

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@WorkcraftHQ',
  youtubeVideoDemo: 'https://youtu.be/D4CsBHaPkAo',
  youtubeVideoEmbed: 'https://www.youtube-nocookie.com/embed/D4CsBHaPkAo',
  pinterest: 'https://www.pinterest.com/WorkcraftHQ/',
  linkedin: 'http://www.linkedin.com/in/workcraft',
  twitter: 'https://x.com',
};

// The 6 exact required services for B2B operations
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'workflow-assessment',
    number: '01',
    title: 'Workflow Assessment & Audit',
    shortDescription: 'In-depth diagnostic analysis of your existing manual procedures, repetitive bottlenecks, and operational friction points across your organization.',
    fullDescription: 'We conduct a structured audit across your daily operations to pinpoint where human time is spent on repetitive, rule-based tasks. Rather than automating haphazardly, we document and map high-friction workflows to determine the highest-leverage areas for workflow improvements.',
    deliverables: [
      'Comprehensive manual workflow inventory & friction matrix',
      'Process dependency maps & bottleneck documentation',
      'Automation viability report with priority scoring',
      'Technical roadmap for system connectivity & implementation',
    ],
    operationalBenefit: 'Identifies high-friction operational drag before a single line of automation code is written.',
    idealFor: 'Businesses with established team routines looking to systematically pinpoint manual time-sinks.',
  },
  {
    id: 'custom-ai-agents',
    number: '02',
    title: 'AI-Assisted Workflow Design',
    shortDescription: 'Custom workflow architectures combining AI-assisted task execution with deterministic rules, schema validation, and human review gates.',
    fullDescription: 'We design and configure AI-assisted workflow steps tailored to your specific process. Built with structured outputs and defined boundaries, these workflows handle multi-phase operational procedures without getting stuck or hallucinating outside defined business rules.',
    deliverables: [
      'Structured process flow blueprints & state machine designs',
      'Schema validation and deterministic boundary guardrails',
      'Structured error-handling and exception fallback routines',
      'Mandatory human-in-the-loop review checkpoints',
    ],
    operationalBenefit: 'Prepares briefs, extracts context, and organizes information while keeping human operators in command.',
    idealFor: 'Organizations needing reliable assistance for multi-step, structured operational procedures.',
  },
  {
    id: 'b2b-process-automation',
    number: '03',
    title: 'Business Process Automation',
    shortDescription: 'Streamlined commercial operational workflows connecting CRM data, inbound lead scoring, document parsing, and automated email sequences.',
    fullDescription: 'We reduce the administrative friction that slows down revenue and client operations. By bridging your commercial stack, automated workflows qualify inbound leads, route incoming documents, trigger tailored correspondence, and update operational databases reliably.',
    deliverables: [
      'Automated inbound lead enrichment and routing pipelines',
      'Dynamic CRM synchronization and status tracking',
      'Structured business document and invoice data parsing',
      'Context-aware email and communication sequence triggers',
    ],
    operationalBenefit: 'Reduces turnaround latency and reduces manual data copy-pasting between commercial platforms.',
    idealFor: 'B2B sales teams, customer success divisions, and operations managers managing high transaction volumes.',
  },
  {
    id: 'integration-connectivity',
    number: '04',
    title: 'Integration & Tool Connectivity',
    shortDescription: 'Bespoke API bridges and webhook connectors linking your existing software stack into one cohesive, automated operating network.',
    fullDescription: 'You do not need to replace the tools you already rely on. We build resilient, bidirectional connectors between your current CRM, project management software, communication tools, and databases. Data flows smoothly where it needs to go without manual file exports or manual entry.',
    deliverables: [
      'Secure webhook listeners and event-driven triggers',
      'Bidirectional API sync between CRM, database, and internal tools',
      'Data transformation, cleansing, and normalization pipelines',
      'Logging, rate-limit management, and automated retry mechanisms',
    ],
    operationalBenefit: 'Unifies siloed platforms into a single connected operational ecosystem.',
    idealFor: 'Businesses with data trapped across multiple isolated software tools and SaaS platforms.',
  },
  {
    id: 'ai-training-enablement',
    number: '05',
    title: 'AI Training & Team Enablement',
    shortDescription: 'Practical, framework-driven team enablement workshops that turn your staff into proficient, confident AI system operators.',
    fullDescription: 'Technology fails without organizational adoption. We provide structured training programs and operational prompt engineering frameworks to upskill your team members. Your staff learns how to interact with, supervise, and extract maximum leverage from automated work systems.',
    deliverables: [
      'Proprietary 4-sentence prompt engineering framework training',
      'Department-specific operational prompt libraries and playbooks',
      'Hands-on interactive team enablement sessions and video recordings',
      'Standard operating procedures (SOPs) for AI system supervision',
    ],
    operationalBenefit: 'Builds lasting internal capability so your workforce operates comfortably alongside AI systems.',
    idealFor: 'Companies seeking to build genuine internal AI literacy rather than relying entirely on external black boxes.',
  },
  {
    id: 'continuous-optimization',
    number: '06',
    title: 'Continuous Optimization & Human Oversight',
    shortDescription: 'Ongoing performance monitoring, model updates, prompt tuning, and human supervisory safeguards to ensure enduring system reliability.',
    fullDescription: 'Automated systems require ongoing maintenance as your business evolves and underlying models advance. We provide regular tuning, drift detection, and rigorous human-in-the-loop oversight mechanisms so your automated workflows remain sharp, compliant, and dependable.',
    deliverables: [
      'Continuous execution logging and performance observability',
      'Periodic prompt tuning and model alignment updates',
      'Human-in-the-loop review queues for sensitive business actions',
      'System health audits and continuous workflow refinement',
    ],
    operationalBenefit: 'Maintains long-term automation accuracy and ensures leadership retains complete oversight.',
    idealFor: 'Growing enterprises looking for peace of mind, quality governance, and enduring system longevity.',
  },
];

// The exact 7-Stage Methodology: FIND → LOCATE → OPTIMIZE → WIRE → VERIFY → MEASURE → MAINTAIN
export interface MethodStage {
  step: number;
  code: string;
  name: string;
  definition: string;
  details: string;
  outputs: string[];
}

export const METHOD_STAGES: MethodStage[] = [
  {
    step: 1,
    code: 'FIND',
    name: 'Identify Workflow',
    definition: 'Identify the business workflow worth improving.',
    details: 'We begin by surveying high-friction operational workflows across departments to pinpoint where human time is spent on repetitive, rules-based tasks rather than strategic decisions.',
    outputs: ['Workflow inventory', 'Candidate workflow selection', 'Initial scope boundaries'],
  },
  {
    step: 2,
    code: 'LOCATE',
    name: 'Find Bottlenecks',
    definition: 'Find bottlenecks, repetitive tasks, disconnected systems and handoff problems.',
    details: 'We document the exact path data takes, highlighting delay zones, manual re-entry points, orphaned communication threads, and multi-tool friction.',
    outputs: ['Friction matrix', 'Handoff dependency map', 'Bottleneck quantification'],
  },
  {
    step: 3,
    code: 'OPTIMIZE',
    name: 'Redesign Process',
    definition: 'Redesign the process before introducing automation.',
    details: 'Automating an inefficient process only creates automated chaos. We streamline procedural rules, define clear decision boundaries, and eliminate redundant handoffs first with designated human review points.',
    outputs: ['To-be process map', 'Standardized schemas', 'Human review criteria'],
  },
  {
    step: 4,
    code: 'WIRE',
    name: 'Connect & Configure',
    definition: 'Connect appropriate tools and configure AI-assisted or automated steps within agreed scope.',
    details: 'We configure API connectors, webhook listeners, and AI extraction nodes strictly within the agreed scope. Tools connect directly into your existing software stack.',
    outputs: ['Live API connectors', 'Data transformation logic', 'Secure VPC dispatch pipelines'],
  },
  {
    step: 5,
    code: 'VERIFY',
    name: 'Test & Safeguards',
    definition: 'Test workflow behavior, exceptions, outputs and human-review points.',
    details: 'Rigorous shadow-mode validation alongside human operators. Every output is tested against edge cases, schema violations, and unexpected payloads without downstream writes until passing the human gate.',
    outputs: ['Shadow-mode test log', 'Exception-handling protocols', 'Human-gate sign-off cards'],
  },
  {
    step: 6,
    code: 'MEASURE',
    name: 'Evaluate Impact',
    definition: 'Define and evaluate suitable operational measures using actual baseline and follow-up data.',
    details: 'We establish baseline measurements upfront and track actual post-deployment metrics: turnaround latency, manual touchpoints reduced, and operator review times.',
    outputs: ['Operational baseline report', 'Follow-up measurement log', 'Proposed capacity tracking'],
  },
  {
    step: 7,
    code: 'MAINTAIN',
    name: 'Document & Oversee',
    definition: 'Document the workflow, clarify ownership and agree how it will be monitored or improved.',
    details: 'Full documentation handoff, team training SOPs, workflow documentation and configuration handover as agreed in the engagement scope, and established procedures for prompt tuning, model drift monitoring, and ongoing oversight.',
    outputs: ['Complete technical SOPs', 'Workflow documentation & handover package', 'Maintenance & oversight SLA'],
  },
];

// Preserved for backward-compatibility with existing stage components
export const PROCESS_STAGES: ProcessStage[] = METHOD_STAGES.map((s) => ({
  step: s.step,
  title: `${s.code}: ${s.name}`,
  subtitle: s.definition,
  description: s.details,
  keyOutputs: s.outputs,
}));
