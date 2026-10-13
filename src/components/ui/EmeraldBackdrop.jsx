/**
 * Atmospheric background for dark emerald sections.
 * Same ingredients as FinalCTA: soft emerald glows, a faded grid and a thin top edge.
 *
 * Usage: the parent needs `relative` (and usually `overflow-hidden`), and its content
 * needs `relative z-10` so it sits above this layer.
 *
 * variant="section"  default, matches FinalCTA
 * variant="hero"     adds wider radial light behind the content (homepage hero)
 * variant="subtle"   quieter version for the footer
 */
const GLOW = '#10B981'
const TEAL = '#2DD4BF'

const gridStyle = {
  backgroundImage:
    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
  backgroundSize: '56px 56px',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
}

export default function EmeraldBackdrop({ variant = 'section' }) {
  const isHero = variant === 'hero'
  const isSubtle = variant === 'subtle'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${isSubtle ? 'opacity-60' : ''}`}
    >
      {/* Wide radial light, hero only: one behind the headline, one behind the visual */}
      {isHero && (
        <div
          className="absolute inset-0"
          style={{
            background: [
              'radial-gradient(60% 55% at 14% 38%, rgba(16,185,129,0.20) 0%, transparent 70%)',
              'radial-gradient(48% 52% at 82% 46%, rgba(16,185,129,0.26) 0%, transparent 72%)',
              'linear-gradient(180deg, rgba(4,47,41,0) 55%, rgba(4,47,41,0.55) 100%)',
            ].join(', '),
          }}
        />
      )}

      {/* Soft emerald glows */}
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 motion-safe:animate-pulse"
        style={{ backgroundColor: GLOW }}
      />
      <div
        className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: TEAL }}
      />

      {/* Grid pattern, faded toward the edges */}
      <div className="absolute inset-0 opacity-[0.07]" style={gridStyle} />

      {/* Thin top edge so the section separates cleanly from the one above */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${GLOW}99, transparent)` }}
      />
    </div>
  )
}
