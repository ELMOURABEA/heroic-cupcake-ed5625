export interface OrgProduct {
  name: string
  description: string
}

export interface Organization {
  slug: string
  name: string
  tagline: string
  description: string
  products: Array<OrgProduct>
  flagship?: boolean
}

const organizations: Array<Organization> = [
  {
    slug: 'mosta-pharm',
    name: 'Mosta-Pharm',
    tagline: 'Pharmacy retail, operations & AI',
    description:
      'The pharmacy and healthcare-retail division. Home to the El-Bendary Pharmacies storefront, its operations tooling, and the AI systems that support both.',
    flagship: true,
    products: [
      { name: 'elbendary-web', description: 'Customer-facing pharmacy storefront' },
      { name: 'elbendary-operations', description: 'Branch and inventory operations' },
      { name: 'elbendary-omnichannel', description: 'Unified in-store, web and delivery orders' },
      { name: 'elbendary-crm', description: 'Customer and prescription relationship management' },
      { name: 'elbendary-analytics', description: 'Sales and operations analytics' },
      { name: 'elbendary-ai', description: 'AI-assisted product and refill recommendations' },
      { name: 'elbendary-devops', description: 'Deployment and infrastructure tooling' },
    ],
  },
  {
    slug: 'el-doctooor',
    name: 'EL-DocToOoR',
    tagline: 'Clinical and healthcare software',
    description:
      'Healthcare software for clinics and patients, including scheduling, clinical records, and AI-assisted diagnostics support.',
    products: [
      { name: 'pharmos', description: 'Pharmacy management platform for clinics' },
      { name: 'clinios', description: 'Clinic scheduling and patient records' },
      { name: 'medai', description: 'AI-assisted clinical decision support' },
      { name: 'healthcare-api', description: 'Shared healthcare data services' },
      { name: 'api-gateway', description: 'Unified API entry point for healthcare products' },
    ],
  },
  {
    slug: 'megaoctooon',
    name: 'MeGaOcToOoN',
    tagline: 'Automation & knowledge systems',
    description:
      'Internal automation and knowledge infrastructure that powers workflows and AI agents across every organization.',
    products: [
      { name: 'agent-orchestrator', description: 'Coordinates AI agents across products' },
      { name: 'research-engine', description: 'Structured research and knowledge retrieval' },
      { name: 'workflow-engine', description: 'Business process automation' },
      { name: 'knowledge-hub', description: 'Shared internal knowledge base' },
    ],
  },
  {
    slug: 'eco-storm',
    name: 'Eco-StorM',
    tagline: 'Marketing & economic intelligence',
    description:
      'Marketing intelligence and analytics tooling used to understand customers and markets across the ecosystem.',
    products: [
      { name: 'economic-storm-platform', description: 'Market and economic intelligence platform' },
      { name: 'marketing-intelligence', description: 'Campaign and channel performance insights' },
      { name: 'analytics-suite', description: 'Cross-product analytics and reporting' },
    ],
  },
  {
    slug: 'octogen',
    name: 'OctoGen',
    tagline: 'Incubating',
    description: 'Reserved for a future generation of products. Scope is being defined.',
    products: [],
  },
  {
    slug: 'solagen',
    name: 'SoLAGeN',
    tagline: 'Incubating',
    description: 'Reserved for a future generation of products. Scope is being defined.',
    products: [],
  },
  {
    slug: 'mosta-pika',
    name: 'MosTa-PiKa',
    tagline: 'Incubating',
    description: 'Reserved for a future generation of products. Scope is being defined.',
    products: [],
  },
]

export default organizations
