import { NavigationItem, Service, Location, Industry } from '@/types'

export const COMPANY_NAME = 'Smartest Assistant'
export const COMPANY_TAGLINE = 'Smart Virtual Assistants Who Think Like Partners, Work Like Pros'
export const COMPANY_EMAIL = 'hello@chiefnest.com'
export const COMPANY_PHONE = ''

export const NAVIGATION: NavigationItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Email Management', href: '/services/email-management' },
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Executive Assistant', href: '/services/executive-assistant' },
      { label: 'Cold Outreach', href: '/services/cold-outreach' },
      { label: 'Calendar Management', href: '/services/calendar-management' },
      { label: 'All Services', href: '/services' },
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'SaaS & Startups', href: '/industries/saas-startups' },
      { label: 'E-commerce', href: '/industries/ecommerce' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'All Industries', href: '/industries' },
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'ROI Calculator', href: '/resources/tools/roi-calculator' },
      { label: 'Task Audit Tool', href: '/resources/task-audit' },
    ]
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'San Francisco', href: '/locations/san-francisco' },
      { label: 'New York City', href: '/locations/new-york-city' },
      { label: 'Chicago', href: '/locations/chicago' },
      { label: 'Los Angeles', href: '/locations/los-angeles' },
      { label: 'Miami', href: '/locations/miami' },
      { label: 'All Locations', href: '/locations' },
    ]
  }
]

export const SERVICES: Service[] = [
  {
    id: 'email-management',
    name: 'Email Management',
    slug: 'email-management',
    description: 'Smart VAs who transform your inbox from chaos to clarity. We handle email triage, responses, and organization so you can focus on what matters.',
    features: [
      'Inbox zero maintenance',
      'Smart email filtering and labeling',
      'Priority message flagging',
      'Template creation and management',
      'Follow-up tracking',
      'Email automation setup'
    ],
    benefits: [
      'Save 10+ hours per week',
      'Never miss important emails',
      'Respond faster to opportunities',
      'Reduce email stress'
    ]
  },
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    slug: 'social-media-management',
    description: 'Strategic social media VAs who grow your presence authentically. From content creation to community management, we handle it all.',
    features: [
      'Content calendar creation',
      'Post scheduling across platforms',
      'Engagement and community management',
      'Analytics and reporting',
      'Hashtag research and optimization',
      'Competitor analysis'
    ],
    benefits: [
      'Consistent brand presence',
      'Increased engagement rates',
      'More time for strategy',
      'Data-driven improvements'
    ]
  },
  {
    id: 'executive-assistant',
    name: 'Executive Assistant',
    slug: 'executive-assistant',
    description: 'High-level support from VAs who think ahead. We anticipate needs, manage complex schedules, and handle sensitive tasks with discretion.',
    features: [
      'Complex calendar management',
      'Meeting preparation and notes',
      'Travel planning and coordination',
      'Expense management',
      'Board meeting preparation',
      'Stakeholder communication'
    ],
    benefits: [
      'Focus on strategic decisions',
      'Seamless daily operations',
      'Professional representation',
      'Reduced cognitive load'
    ]
  },
  {
    id: 'cold-outreach',
    name: 'Cold Outreach',
    slug: 'cold-outreach',
    description: 'Smart VAs who open doors to new opportunities. We research, personalize, and execute outreach campaigns that get responses.',
    features: [
      'Prospect research and qualification',
      'Personalized email crafting',
      'LinkedIn outreach campaigns',
      'Follow-up sequences',
      'Response tracking and CRM updates',
      'A/B testing and optimization'
    ],
    benefits: [
      'Higher response rates',
      'Quality lead generation',
      'Scalable outreach process',
      'More sales conversations'
    ]
  }
]

export const LOCATIONS: Location[] = [
  {
    id: 'san-francisco',
    city: 'San Francisco',
    state: 'CA',
    slug: 'san-francisco',
    timezone: 'PST',
    description: 'Supporting Bay Area startups and tech companies with smart virtual assistants who understand the fast-paced innovation culture.'
  },
  {
    id: 'new-york-city',
    city: 'New York City',
    state: 'NY',
    slug: 'new-york-city',
    timezone: 'EST',
    description: 'Serving NYC businesses with virtual assistants who match the city\'s energy and understand its diverse business landscape.'
  },
  {
    id: 'chicago',
    city: 'Chicago',
    state: 'IL',
    slug: 'chicago',
    timezone: 'CST',
    description: 'Supporting Chicago enterprises with virtual assistants who bring Midwest work ethic and big-city sophistication.'
  }
]

export const INDUSTRIES: Industry[] = [
  {
    id: 'saas-startups',
    name: 'SaaS & Startups',
    slug: 'saas-startups',
    description: 'Virtual assistants who speak startup. We understand rapid growth, product launches, and the need to move fast without breaking things.',
    challenges: [
      'Rapid scaling needs',
      'Limited resources',
      'Constant context switching',
      'Customer support overflow'
    ],
    solutions: [
      'Scalable VA teams',
      'Tech-savvy assistants',
      'Flexible engagement models',
      'Startup tool expertise'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    slug: 'ecommerce',
    description: 'Virtual assistants who understand online retail. From inventory management to customer service, we help you sell more with less stress.',
    challenges: [
      'Order management complexity',
      'Customer service volume',
      'Inventory tracking',
      'Multi-channel management'
    ],
    solutions: [
      'Order processing automation',
      'Customer service excellence',
      'Inventory management support',
      'Platform integration expertise'
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    description: 'Virtual assistants who know real estate inside out. We handle listings, showings, transactions, and client communication with expertise.',
    challenges: [
      'Time-sensitive transactions',
      'Client communication overload',
      'Listing management',
      'Paperwork complexity'
    ],
    solutions: [
      'Transaction coordination',
      'Client relationship management',
      'Listing optimization',
      'Document management'
    ]
  }
]

export const FOOTER_LINKS = {
  services: [
    { label: 'Email Management', href: '/services/email-management' },
    { label: 'Social Media Management', href: '/services/social-media-management' },
    { label: 'Executive Assistant', href: '/services/executive-assistant' },
    { label: 'Cold Outreach', href: '/services/cold-outreach' },
    { label: 'All Services', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'ROI Calculator', href: '/resources/tools/roi-calculator' },
    { label: 'Task Audit Tool', href: '/resources/task-audit' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
  ]
}

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/smartestassistant',
  twitter: 'https://twitter.com/smartestassist',
  facebook: 'https://facebook.com/smartestassistant',
}