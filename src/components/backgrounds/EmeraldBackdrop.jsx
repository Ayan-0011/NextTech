import { BASE, GLOW, GLOW_2 } from '../../theme'

/**
 * Emerald backdrop (same look as the FinalCTA section):
 * soft glows + faded grid + thin glowing top edge.
 * Put it as the first child of a `relative overflow-hidden` section
 * and give the section content `relative z-10`.
 *
 * side: 'left' | 'right' | 'center' -> where the main glow sits
 * edge: show the thin glowing line on top
 */
export default function EmeraldBackdrop({ side = 'left', edge = true, grid = true }) {
  const main =
    side === 'right'
      ? '-top-32 -right-32'
      : side === 'center'
      ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      : '-top-32 -left-32'
  const second =
    side === 'right' ? '-bottom-40 -left-24' : '-bottom-40 -right-24'

  return (
    <>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute ${main} h-96 w-96 rounded-full blur-3xl opacity-30 motion-safe:animate-pulse`}
        style={{ backgroundColor: GLOW }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute ${second} h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20`}
        style={{ backgroundColor: GLOW_2 }}
      />
      {grid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      )}
      {edge && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${GLOW}99, transparent)` }}
        />
      )}
    </>
  )
}
