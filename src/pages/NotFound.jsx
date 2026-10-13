
import { Link } from 'react-router-dom'
import FadeIn from '../components/animations/FadeIn'

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* Background Decoration */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: 'var(--mint)' }} />

      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{ background: 'var(--mint-soft)' }} />

      <div className="container relative z-10">
        <FadeIn className="max-w-2xl mx-auto text-center">

          {/* 404 Number */}
          <div className="relative inline-block mb-8">
            <div
              className="absolute inset-0 scale-110 rounded-full blur-3xl opacity-60"
              style={{ background: 'var(--mint)' }}
            />

            <h1
              className="relative text-[120px] sm:text-[180px] font-extrabold leading-none tracking-tighter"
              style={{ color: 'var(--forest)' }}
            >
              4<span style={{ color: 'var(--accent)' }}>0</span>4
            </h1>

            {/* Decorative dots */}
            <span
              className="absolute top-2 right-2 w-4 h-4 rounded-full animate-pulse"
              style={{ background: 'var(--accent)' }}
            />

            <span
              className="absolute bottom-5 -left-4 w-3 h-3 rounded-full"
              style={{ background: 'var(--brand)' }}
            />
          </div>

          {/* Heading */}
          <span
            className="block text-xs font-bold uppercase tracking-[0.25em] mb-4"
            style={{ color: 'var(--brand)' }}
          >
            Page not found
          </span>

          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: 'var(--forest)' }}
          >
            Oops! Lost your way?
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-9"
            style={{ color: 'var(--muted)' }}
          >
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to something great.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: 'var(--forest)',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--forest)'
              }}
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--surface)',
                color: 'var(--forest)',
                borderColor: 'var(--border)',
              }}
            >
              Go Back
            </button>
          </div>

          {/* Bottom Label */}
          <div className="flex items-center justify-center gap-4 mt-14">
            <span
              className="h-px w-12"
              style={{ background: 'var(--border)' }}
            />

            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: 'var(--muted)' }}
            >
              Nexa Tech
            </span>

            <span
              className="h-px w-12"
              style={{ background: 'var(--border)' }}
            />
          </div>

        </FadeIn>
      </div>
    </main>
  )
}