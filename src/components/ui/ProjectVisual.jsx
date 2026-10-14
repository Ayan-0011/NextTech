import { Globe, Smartphone, Layers, Sparkles, Code2 } from 'lucide-react'

const icons = {
  Web: Globe,
  Mobile: Smartphone,
  SaaS: Layers,
  AI: Sparkles,
  'Custom Software': Code2,
}

export default function ProjectVisual({ category, title }) {
  const Icon = icons[category] ?? Globe

  return (
    <div
      role="img"
      aria-label={`${title} preview`}
      className="relative h-full w-full overflow-hidden bg-forest"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-8 flex flex-col rounded-xl border border-white/15 bg-white/5 p-5">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-300/20 text-emerald-300">
          <Icon size={20} aria-hidden="true" />
        </div>
        <div className="space-y-2.5">
          <div className="h-2.5 w-2/3 rounded bg-white/25" />
          <div className="h-2.5 w-1/2 rounded bg-white/15" />
        </div>
        <div className="mt-auto grid grid-cols-3 gap-3">
          <div className="h-14 rounded-lg bg-white/10" />
          <div className="h-14 rounded-lg bg-emerald-300/20" />
          <div className="h-14 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  )
}