import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiBootstrap, SiRedux, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiMysql, SiSupabase, SiFirebase, SiFlutter, SiKotlin, SiSwift, SiN8N,
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {
  Code2, Plug, Lock, KeyRound, Puzzle, Bell, CreditCard, HardDrive, Camera,
  Cpu, Search, Webhook, Database, FileText, ShieldCheck, ClipboardList, Sparkles,
} from 'lucide-react'

// Brand logos: [Icon, brand color]
const brandIcons = {
  'HTML5': [FaHtml5, '#E34F26'],
  'CSS3': [FaCss3Alt, '#1572B6'],
  'JavaScript': [SiJavascript, '#F7DF1E'],
  'TypeScript': [SiTypescript, '#3178C6'],
  'React.js': [SiReact, '#61DAFB'],
  'React': [SiReact, '#61DAFB'],
  'React Native': [SiReact, '#61DAFB'],
  'Next.js': [SiNextdotjs, '#000000'],
  'Tailwind CSS': [SiTailwindcss, '#06B6D4'],
  'Bootstrap': [SiBootstrap, '#7952B3'],
  'Redux Toolkit': [SiRedux, '#764ABC'],
  'Framer Motion': [SiFramer, '#0055FF'],
  'Node.js': [SiNodedotjs, '#339933'],
  'Node.js backends': [SiNodedotjs, '#339933'],
  'Node.js and Express': [SiNodedotjs, '#339933'],
  'Express.js': [SiExpress, '#000000'],
  'MongoDB': [SiMongodb, '#47A248'],
  'PostgreSQL': [SiPostgresql, '#4169E1'],
  'PostgreSQL and MySQL': [SiPostgresql, '#4169E1'],
  'MySQL': [SiMysql, '#4479A1'],
  'Supabase': [SiSupabase, '#3ECF8E'],
  'Firebase': [SiFirebase, '#FFCA28'],
  'Flutter': [SiFlutter, '#02569B'],
  'Kotlin (Android native)': [SiKotlin, '#7F52FF'],
  'Swift (iOS native)': [SiSwift, '#F05138'],
  'OpenAI API': Sparkles,
  'n8n': [SiN8N, '#EA4B71'],
}

// Concepts without a logo: lucide icon
const conceptIcons = {
  'REST APIs': Plug,
  'API-based automation': Plug,
  'API integrations': Plug,
  'Authentication': Lock,
  'Authentication and authorization': Lock,
  'JWT and secure cookies': KeyRound,
  'Third-party API integrations': Puzzle,
  'Third-party services': Puzzle,
  'Push notifications': Bell,
  'Payment integration': CreditCard,
  'Offline storage': HardDrive,
  'Camera and location': Camera,
  'LLM integrations': Cpu,
  'Retrieval-augmented generation': Search,
  'Vector search': Search,
  'Webhooks and schedules': Webhook,
  'Databases': Database,
  'Database design': Database,
  'Document parsing': FileText,
  'Role-based permissions': ShieldCheck,
  'Audit trails': ClipboardList,
}

export default function TechIcon({ name, fallback: Fallback = Code2 }) {
  const brand = brandIcons[name]

  if (brand) {
    const [Icon, color] = brand
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-surface">
        <Icon size={22} color={color} aria-hidden="true" />
      </span>
    )
  }

  const Concept = conceptIcons[name] ?? Fallback
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
      <Concept size={22} aria-hidden="true" />
    </span>
  )
}