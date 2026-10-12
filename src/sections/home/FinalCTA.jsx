import { Link } from 'react-router-dom'
import FadeIn from '../../components/animations/FadeIn'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 75% 50%, #1e40af 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 text-center">
        <FadeIn>
          <h2 className="heading-section text-white mb-6 max-w-2xl mx-auto">
            Have something worth building?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Let's turn your idea into a product people can actually use.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-navy font-bold px-8 py-4 rounded-lg hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 text-base"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
