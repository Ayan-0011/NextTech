import { Link } from 'react-router-dom'
import FadeIn from '../../components/animations/FadeIn'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue mb-4 block">
              About
            </span>
            <h2 className="heading-section text-navy mb-6">
              A small team focused on building useful software.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Nexa Tech is a focused software team helping businesses turn ideas, workflows and customer needs into reliable digital products. We work directly with clients — no account managers, no middlemen.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-blue font-semibold hover:gap-4 transition-all duration-200"
            >
              Learn more about us <span aria-hidden="true">→</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
