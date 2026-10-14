export const projects = [
  {
    slug: 'medinest',
    name: 'MediNest',
    tagline: 'Smart healthcare management platform.',
    category: 'Web',
    description:
      'A healthcare management platform designed to simplify patient records, appointment scheduling, and communication between patients and healthcare providers.',
    industry: 'Healthcare',
    platform: 'Web',
    timeline: '10 weeks',
    tech: ['React', 'Node.js', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Healthcare staff relied on manual records and disconnected systems, making it difficult to manage patient information and appointments efficiently.',
    approach:
      'We mapped patient and staff workflows, identified repetitive administrative tasks, and designed an accessible interface focused on simplicity and clear information hierarchy.',
    solution:
      'A centralized healthcare web application for managing patient records, appointments, and essential healthcare information through an intuitive dashboard.',
    features: [
      'Patient record management',
      'Appointment scheduling interface',
      'Healthcare service information',
      'Responsive patient-facing pages',
      'Centralized dashboard layout',
      'Accessible and intuitive navigation',
    ],
    results: [
      'Streamlined access to patient information',
      'Simplified appointment management workflows',
      'Improved usability across desktop and mobile devices',
    ],
    color: '#EFF6FF',
    accent: '#2563EB',
  },

  {
    slug: 'fleettrack',
    name: 'FleetTrack',
    tagline: 'Fleet operations made simple.',
    category: 'Web',
    description:
      'A fleet management platform that helps transportation businesses organize vehicles, drivers, trips, fuel records, and maintenance activities from a centralized dashboard.',
    industry: 'Transportation & Logistics',
    platform: 'Web',
    timeline: '12 weeks',
    tech: ['React', 'Node.js', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Fleet operators struggled to coordinate vehicle availability, driver assignments, trip records, and maintenance schedules across different tools.',
    approach:
      'We organized the system around daily fleet operations, defined role-based workflows, and designed separate interfaces for administrators, dispatchers, fleet managers, and drivers.',
    solution:
      'A centralized fleet operations dashboard with vehicle and driver management, trip tracking, fuel logs, maintenance scheduling, and role-based access control.',
    features: [
      'Vehicle registration and status management',
      'Driver profiles and assignments',
      'Trip creation and status tracking',
      'Fuel consumption records',
      'Maintenance scheduling and reminders',
      'Role-based dashboards and permissions',
    ],
    results: [
      'Centralized vehicle and driver information',
      'Improved visibility into trip and maintenance records',
      'More organized fleet management workflows',
    ],
    color: '#EFF6FF',
    accent: '#1D4ED8',
  },

  {
    slug: 'learnsphere',
    name: 'LearnSphere',
    tagline: 'A smarter digital learning experience.',
    category: 'Web',
    description:
      'An online learning platform where students can explore courses, track learning progress, access educational resources, and manage their learning journey in one place.',
    industry: 'Education',
    platform: 'Web',
    timeline: '8 weeks',
    tech: ['React', 'Node.js', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Learners needed a simpler way to discover relevant courses, organize educational content, and understand their progress without navigating multiple disconnected pages.',
    approach:
      'We focused on a student-first experience, creating intuitive course discovery, a clear learning dashboard, and consistent navigation across the platform.',
    solution:
      'A responsive learning management platform with course listings, student dashboards, progress tracking, and tools for organizing educational content.',
    features: [
      'Course discovery and categorization',
      'Student dashboard',
      'Course enrollment management',
      'Learning progress indicators',
      'Educational resource organization',
      'Responsive interface for multiple devices',
    ],
    results: [
      'Simplified course discovery and navigation',
      'Improved visibility into learning progress',
      'Created a consistent learning experience across devices',
    ],
    color: '#F5F3FF',
    accent: '#7C3AED',
  },

  {
    slug: 'fieldpoint',
    name: 'FieldPoint',
    tagline: 'Site inspections that work offline.',
    category: 'Mobile',
    description:
      'A mobile app for field inspectors to complete checklists, capture photos, and collect signatures on site, even without an internet connection.',
    industry: 'Field Services',
    platform: 'iOS & Android',
    timeline: '14 weeks',
    tech: ['React Native', 'SQLite', 'REST API'],
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Inspectors filled paper forms on site and re-typed them later, which caused delays, missing photos, and inconsistent reports.',
    approach:
      'We shadowed the inspection workflow, reduced each checklist to the fewest possible taps, and built the app offline-first so data is never lost in low-signal areas.',
    solution:
      'A cross-platform mobile app with configurable checklists, photo capture, digital signatures, and background sync that uploads reports once the device reconnects.',
    features: [
      'Configurable inspection checklists',
      'Photo capture with annotations',
      'Digital signature collection',
      'Offline-first data storage',
      'Automatic background sync',
      'PDF report generation',
    ],
    results: [
      'Inspection data captured once, directly on site',
      'Reports available shortly after the visit ends',
      'Reliable use in areas with poor connectivity',
    ],
    color: '#ECFDF5',
    accent: '#059669',
  },

  {
    slug: 'invoicedesk',
    name: 'InvoiceDesk',
    tagline: 'Billing for small accounting firms.',
    category: 'SaaS',
    description:
      'A multi-tenant invoicing and payment tracking platform that lets small accounting firms manage billing for all of their clients from a single workspace.',
    industry: 'Finance & Accounting',
    platform: 'Web (SaaS)',
    timeline: '16 weeks',
    tech: ['Next.js', 'PostgreSQL', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Firms were managing invoices in spreadsheets, so payment status, reminders, and client records were scattered and hard to audit.',
    approach:
      'We designed the product around a separate workspace per firm, defined clear user roles, and planned subscription billing early so the platform could scale cleanly.',
    solution:
      'A subscription-based SaaS product with isolated workspaces, invoice templates, payment tracking, automated reminders, and a full activity history.',
    features: [
      'Multi-tenant workspaces',
      'Invoice templates and recurring billing',
      'Online payment collection',
      'Automated payment reminders',
      'Role-based access for staff',
      'Audit trail of every change',
    ],
    results: [
      'One workspace for every client of a firm',
      'Clear visibility into paid and overdue invoices',
      'Every change traceable to a specific user',
    ],
    color: '#FFF7ED',
    accent: '#EA580C',
  },

  {
    slug: 'docsense',
    name: 'DocSense',
    tagline: 'Find answers inside your documents.',
    category: 'AI',
    description:
      'An AI-assisted document search tool that lets teams ask questions in plain language and get answers with references to the original source document.',
    industry: 'Professional Services',
    platform: 'Web',
    timeline: '10 weeks',
    tech: ['Python', 'FastAPI', 'Vector Search', 'React'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Teams spent too much time searching through folders of PDFs and reports to find a single clause, figure, or policy.',
    approach:
      'We indexed documents into a searchable knowledge base, made every answer show its source, and added a review step so people can verify before relying on a result.',
    solution:
      'A question-and-answer interface that retrieves relevant passages, summarizes them, and links back to the exact page of the source document.',
    features: [
      'Natural language document search',
      'Answers with source references',
      'Document upload and indexing',
      'Folder and team-level access control',
      'Summary of long documents',
      'Search history for repeat questions',
    ],
    results: [
      'Faster lookup of information across large document sets',
      'Answers that can be verified against the original source',
      'Less manual searching for support and legal teams',
    ],
    color: '#FDF4FF',
    accent: '#C026D3',
  },

  {
    slug: 'stocksync',
    name: 'StockSync',
    tagline: 'One inventory across every warehouse.',
    category: 'Custom Software',
    description:
      'A custom inventory and order management system for a distributor with multiple warehouses, built to replace spreadsheets and a legacy desktop tool.',
    industry: 'Distribution & Retail',
    platform: 'Web & Barcode Scanners',
    timeline: '18 weeks',
    tech: ['.NET', 'SQL Server', 'React'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    challenge:
      'Stock levels were tracked separately in each warehouse, so teams often discovered shortages only after an order was already placed.',
    approach:
      'We worked with warehouse staff to map receiving, transfer, and dispatch processes, then migrated existing data in stages so daily operations were never interrupted.',
    solution:
      'A tailor-made system that tracks stock in real time, manages purchase and sales orders, supports barcode scanning, and produces reports per warehouse.',
    features: [
      'Real-time stock levels per warehouse',
      'Purchase and sales order management',
      'Barcode scanning for receiving and dispatch',
      'Stock transfers between locations',
      'Low-stock alerts',
      'Operational and inventory reports',
    ],
    results: [
      'A single source of truth for stock levels',
      'Fewer surprises from out-of-stock items',
      'Warehouse teams working from the same data',
    ],
    color: '#F0F9FF',
    accent: '#0284C7',
  },
]