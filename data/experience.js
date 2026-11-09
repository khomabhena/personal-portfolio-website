const getExperience = () => [
  {
    id: 'tapseed',
    company: 'Tapseed',
    location: 'Harare',
    role: 'Senior Software Engineer (Business Systems & Integrations)',
    period: 'July 2025 – Present',
    summary:
      'Lead design and delivery of integrations that connect operational channels to financial and core-banking systems for GetBucks Bank and merchant programmes.',
    bullets: [
      'Delivered an always-on ZIPIT 3.0 service integrating Postilion with BankWare: account lookup, credit push, and reversals, with suspense-aware booking paths and support for reconciliation and dispute investigation.',
      'Built a Core Banking HTTP API wrapping BankWare for channel systems (lookup, balance, debit/credit, reversal dispatch), with clear data contracts and OpenAPI documentation.',
      'Integrated Postilion for card- and account-based traffic (persistent sessions, message framing, ISO 8583 fields) across ZIPIT and branch POS.',
      'Implemented durable transaction ledgers and traffic logs (credentials redacted) so operational and financial events remain traceable for support, certification, and reconciliation.',
      'Delivered merchant POS and Redboxx programme systems spanning operator UI, backend APIs, and branch/field apps: deposits, withdrawals, gift-card catalogue/redemption, and role-based access.',
      'Built Redboxx portal capabilities on the payments gateway for merchant onboarding, product/catalogue configuration, operational reporting, and programme administration.',
      'Designed and operated the GetBucks VAS server linking customer airtime/bill-payment channels to core banking and upstream providers.',
      'Architected React Native Super App staging container (Expo) hosting H5 mini-apps; delivered payment automation with RSA-SHA256 signing and AES-GCM encryption plus Django REST callback processing.',
    ],
  },
  {
    id: 'astro-chief',
    company: 'Astro Mobile',
    location: 'Harare',
    role: 'Chief Software Engineer',
    period: 'June 2019 – July 2022',
    summary:
      'Led a cross-functional engineering team delivering the EShagi fintech platform (mobile + web) through production launch and ongoing support.',
    bullets: [
      'Owned technical architecture, delivery planning, and coordination with stakeholders and partners; hired and mentored engineers; ran workshops to raise delivery capability.',
      'Drove platform changes that cut loan application and processing time by ~80% and supported a profitable launch (positive ROI within three months).',
      'Established testing, documentation, and release practices for reliable production operation.',
    ],
  },
  {
    id: 'astro-senior',
    company: 'Astro Mobile',
    location: 'Harare',
    role: 'Senior Developer',
    period: 'April 2018 – June 2019',
    summary:
      'Built REST APIs and data models for high-volume fintech workflows and the EShagi web application used in day-to-day operations.',
    bullets: [
      'Built the EShagi full-stack fintech web app (React, Redux, Hooks, Router) and a custom REST API layer with auth, validation, and performance-focused data access.',
      'Introduced Git/CI practices and Agile delivery with clients and non-technical stakeholders, maintaining iterative go-live of features.',
    ],
  },
  {
    id: 'tongaat',
    company: 'Tongaat Hulett',
    location: 'Triangle',
    role: 'Android Developer',
    period: 'May 2017 – January 2018',
    summary:
      'Delivered an operational ordering system for Triangle Country Club with real-time order flow to service staff.',
    bullets: [
      'Built a location-aware Android ordering app for meals and refreshments on- and off-premises, with real-time WebSocket order notifications to waitstaff.',
      'Contributed to ~25% higher food sales through faster ordering and better member engagement.',
    ],
  },
]

export default getExperience
