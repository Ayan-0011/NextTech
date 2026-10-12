
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-bg px-5 py-24 overflow-hidden">
      <div className="container">
        <FadeIn className="max-w-2xl mx-auto text-center">

          {/* 404 Illustration */}
          <div className="relative inline-flex items-center justify-center mb-8">
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-blue/10 rounded-full blur-3xl" />

            {/* 404 Number */}
            <h1 className="relative text-[120px] sm:text-[170px] leading-none font-extrabold tracking-tighter text-navy">
              4
              <span className="inline-block text-blue">0</span>
              4
            </h1>

            {/* Decorative Dot */}
            <span className="absolute -top-2 right-2 sm:right-5 w-4 h-4 rounded-full bg-blue animate-pulse" />
            <span className="absolute bottom-4 -left-3 w-3 h-3 rounded-full bg-navy/20" />
          </div>

          {/* Text Content */}
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-blue mb-4">
            Page not found
          </span>

          <h2 className="heading-section text-navy mb-5">
            Looks like you're
            <span className="block">off the map.</span>
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-9">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back on the right track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-blue transition-all duration-300 hover:-translate-y-0.5"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg border border-border bg-surface text-navy text-sm font-semibold hover:border-blue hover:text-blue transition-all duration-300"
            >
              Go Back
            </button>
          </div>

          {/* Bottom Detail */}
          <div className="flex items-center justify-center gap-3 mt-14">
            <span className="h-px w-10 bg-border" />
            <span className="text-xs text-muted tracking-widest uppercase">
              Nexa Tech
            </span>
            <span className="h-px w-10 bg-border" />
          </div>

        </FadeIn>
      </div>
    </main>
  )
}
