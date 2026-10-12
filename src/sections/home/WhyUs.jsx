import { useRef, useState, useEffect } from 'react'
import FadeIn from '../../components/animations/FadeIn'

const principles = [
  {
    number: '01',
    title: 'Clear communication',
    body: 'You always know what\'s being built, why it matters and what\'s next. No surprises, no jargon — just clear updates at every stage.',
  },
  {
    number: '02',
    title: 'Practical engineering',
    body: 'We choose technology based on the problem, not because it\'s trendy. The right tool is whatever reliably solves the job.',
  },
  {
    number: '03',
    title: 'Small focused team',
    body: 'Fewer layers, faster decisions and more ownership. Everyone working on your project is directly involved — not managing a chain.',
  },
  {
    number: '04',
    title: 'Built to grow',
    body: 'Products should be able to evolve as the business grows. We build with that in mind from the first line of code.',
  },
]

export default function WhyUs() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const observers = principles.map((_, i) => {
      const el = refs.current[i]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i)
        },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <section className="section-padding bg-bg">
      <div className="container">
        <FadeIn className="max-w-xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue mb-4 block">
            Why Nexa Tech
          </span>
          <h2 className="heading-section text-navy">Why teams choose us</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: sticky title */}
          <div className="hidden lg:block sticky top-32">
            <div className="relative">
              {/* Progress bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border">
                <div
                  className="bg-blue w-full transition-all duration-500"
                  style={{ height: `${((active + 1) / principles.length) * 100}%` }}
                />
              </div>
              <div className="pl-8 space-y-6">
                {principles.map((p, i) => (
                  <button
                    key={p.number}
                    onClick={() => {
                      refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    className={`block text-left transition-all duration-300 ${
                      active === i ? 'opacity-100' : 'opacity-40'
                    }`}
                  >
                    <span className="text-xs font-bold text-blue tracking-widest">{p.number}</span>
                    <p className={`font-semibold mt-0.5 ${active === i ? 'text-navy text-xl' : 'text-text text-base'}`}>
                      {p.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: scrollable principles */}
          <div className="space-y-10">
            {principles.map((p, i) => (
              <div
                key={p.number}
                ref={(el) => (refs.current[i] = el)}
                className={`p-8 rounded-xl border transition-all duration-500 ${
                  active === i
                    ? 'border-blue/30 bg-soft-blue shadow-sm'
                    : 'border-border bg-surface'
                }`}
              >
                <span className="text-xs font-bold text-blue tracking-widest mb-3 block">
                  {p.number}
                </span>
                <h3 className="text-xl font-bold text-navy mb-3">{p.title}</h3>
                <p className="text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
