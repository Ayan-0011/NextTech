import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'
import EmeraldBackdrop from '../../components/ui/EmeraldBackdrop'
import { getContactPath } from '../../data/serviceDetails'

export default function ServiceCTA({ service }) {
  return (
    <section data-surface="dark" className="relative overflow-hidden bg-forest py-24 text-white">
      <EmeraldBackdrop />
      <div className="container relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section mb-4 text-white">{service.cta.title}</h2>
          <p className="mb-8 text-lg leading-relaxed text-white/70">{service.cta.text}</p>
          <Link
            to={getContactPath(service)}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/90"
          >
            Discuss Your Project <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}