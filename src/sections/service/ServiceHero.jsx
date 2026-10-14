import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'
import EmeraldBackdrop from '../../components/ui/EmeraldBackdrop'
import { getContactPath } from '../../data/serviceDetails'

export default function ServiceHero({ service }) {
  const scrollToTech = () =>
    document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section data-surface="dark" className="relative overflow-hidden pt-28 pb-20 bg-forest text-white">
      <EmeraldBackdrop />
      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <Link
            to="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={15} aria-hidden="true" /> All services
          </Link>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-emerald-300">
            {service.eyebrow}
          </span>
          <h1 className="heading-hero mb-6 text-white">{service.headline}</h1>
          <p className="mb-8 text-xl leading-relaxed text-white/70">{service.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to={getContactPath(service.slug)}
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/90"
            >
              Discuss Your Project <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={scrollToTech}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Technologies
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-xl border border-white/15 bg-white/5 p-6">
            <div className="mb-5 flex gap-2" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
            </div>
            <dl className="divide-y divide-white/10">
              {service.heroStack.map((row) => (
                <div key={row.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="w-28 shrink-0 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-white/80">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}