import { services } from '../data/services'
import FadeIn from '../components/animations/FadeIn'
import FinalCTA from '../sections/home/FinalCTA'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-navy text-white">
        <div className="container">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue/70 mb-4 block">
              Services
            </span>
            <h1 className="heading-hero text-white mb-6">
              Software built around your business.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We don't offer one-size-fits-all solutions. Every project starts with understanding the specific problem before we write a line of code.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`section-padding ${i % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}
        >
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue mb-3 block">
                  {service.number}
                </span>
                <h2 className="heading-section text-navy mb-4">{service.title}</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">{service.short}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-text mb-2">The problem</h3>
                  <p className="text-muted leading-relaxed text-sm">{service.problem}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-text mb-2">Our approach</h3>
                  <p className="text-muted leading-relaxed text-sm">{service.solution}</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue/90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Discuss a project <ArrowRight size={15} />
                </Link>
              </FadeIn>

              {/* Right */}
              <FadeIn delay={0.15}>
                <div className="bg-surface border border-border rounded-xl p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
                    What we build
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 bg-bg rounded-lg text-muted font-medium border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      <FinalCTA />
    </main>
  )
}
