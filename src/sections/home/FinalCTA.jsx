import { Link } from 'react-router-dom'
import FadeIn from '../../components/animations/FadeIn'

// Change these two values to re-theme the whole section quickly
const BASE = '#053B33' // deep emerald background
const GLOW = '#10B981' // bright emerald used for glows

const points = [
  'Reply within one business day',
  'Free initial consultation',
  'No obligation',
]

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-12"
      style={{ backgroundColor: BASE }}
    >
      {/* Soft emerald glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 motion-safe:animate-pulse"
        style={{ backgroundColor: GLOW }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: '#2DD4BF' }}
      />

      {/* Grid pattern, faded toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      {/* Thin top edge so it separates cleanly from the section above */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${GLOW}99, transparent)`,
        }}
      />

      <div className="container relative z-10 text-center">
        <FadeIn>
          <h2 className="heading-section mx-auto mb-6 max-w-2xl text-white">
            Have something worth building?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-emerald-50/75">
            Let's turn your idea into a product people can actually use.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-base font-bold text-[#053B33] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-emerald-50/70">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 flex-none"
                  fill="none"
                  stroke={GLOW}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10.5l4 4 8-9" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}