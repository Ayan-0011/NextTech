import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import NLogo from '../../components/brand/NLogo'
import ServicePreview from './ServicePreview'
import { services } from '../../data/services'

const W = 460
const H = 340
const CENTER = { x: 230, y: 160 }

const layout = [
  { slug: 'web-development', label: 'Web', x: 80, y: 52 },
  { slug: 'mobile-applications', label: 'Mobile', x: 380, y: 52 },
  { slug: 'custom-software', label: 'Software', x: 80, y: 268 },
  { slug: 'ai-automation', label: 'AI', x: 380, y: 268 },
]

const nodes = layout
  .map((n) => ({ ...n, service: services.find((s) => s.slug === n.slug) }))
  .filter((n) => n.service)

const pct = (value, total) => `${(value / total) * 100}%`

export default function TechnicalVisual() {
  const [active, setActive] = useState(nodes[0].slug)
  const reduceMotion = useReducedMotion()
  const current = nodes.find((n) => n.slug === active)

  return (
    <div
      role="group"
      aria-label="Nexa Tech services and the tools behind each one"
      className="w-full max-w-[460px]"
    >
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        {/* Spokes and packets */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          {nodes.map((n) => (
            <line
              key={n.slug}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={n.x}
              y2={n.y}
              strokeWidth={active === n.slug ? 2 : 1.5}
              className={`transition-colors duration-200 ${
                active === n.slug ? 'stroke-accent' : 'stroke-white/25'
              }`}
            />
          ))}
          {!reduceMotion &&
            nodes.map((n, i) => (
              <motion.circle
                key={n.slug}
                r={3.5}
                className="fill-accent"
                initial={{ cx: CENTER.x, cy: CENTER.y, opacity: 0 }}
                animate={{ cx: [CENTER.x, n.x], cy: [CENTER.y, n.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.8,
                  times: [0, 0.15, 0.85, 1],
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: i * 0.6,
                }}
              />
            ))}
        </svg>

        {/* Hub: the N mark */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: pct(CENTER.x, W), top: pct(CENTER.y, H) }}
        >
          <div className="relative h-[72px] w-[72px] rounded-[18px] shadow-lg shadow-black/30">
            {!reduceMotion && (
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-[18px] border border-accent"
                animate={{ scale: [1, 1.55], opacity: [0.35, 0] }}
                transition={{ duration: 3, ease: 'easeOut', repeat: Infinity }}
              />
            )}
            <NLogo size={72} light />
          </div>
        </div>

        {/* Service nodes */}
        {nodes.map((n) => {
          const isActive = active === n.slug
          return (
            <button
              key={n.slug}
              type="button"
              aria-describedby="hub-tools"
              onMouseEnter={() => setActive(n.slug)}
              onFocus={() => setActive(n.slug)}
              onClick={() => setActive(n.slug)}
              className={`absolute flex h-11 w-[26%] min-w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border bg-surface text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-forest ${
                isActive
                  ? 'border-accent text-brand shadow-md shadow-black/20'
                  : 'border-transparent text-forest shadow-sm shadow-black/10 hover:border-accent/60'
              }`}
              style={{ left: pct(n.x, W), top: pct(n.y, H) }}
            >
              {n.label}
            </button>
          )
        })}
      </div>

      {/* Selected service: a small product preview, what it is, and the tools behind it.
          Stays put after hover so the link is always clickable. */}
      <div
        id="hub-tools"
        aria-live="polite"
        className="mt-4 min-h-[290px] rounded-xl border border-white/10 bg-surface p-4 shadow-xl shadow-black/20 sm:min-h-[184px]"
      >
        <motion.div
          key={current.slug}
          className="flex flex-col gap-4 sm:flex-row"
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="h-[84px] w-[120px] shrink-0 sm:h-[92px] sm:w-[132px]">
            <ServicePreview slug={current.slug} />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-forest">{current.service.title}</p>
            <p className="mt-0.5 text-xs text-muted">{current.service.short}</p>
            <ul className="mt-3 flex list-none flex-wrap gap-1.5">
              {current.service.tech.map((tool, i) => (
                <motion.li
                  key={tool}
                  className="rounded-md border border-border bg-bg px-2 py-0.5 text-xs font-medium text-text"
                  initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.08 + i * 0.05 }}
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
            <Link
              to={`/services#${current.slug}`}
              className="group mt-3 inline-flex items-center gap-1.5 rounded text-sm font-semibold text-brand transition-all duration-200 hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" >
              See {current.service.title}
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}