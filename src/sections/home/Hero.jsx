import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TechnicalVisual from './TechnicalVisual'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg pb-12 pt-24 md:pb-16 md:pt-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.8,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue mb-6">
                <span className="w-6 h-px bg-blue" />
                Software Development
              </span>
            </motion.div>

            <motion.h1
              className="heading-hero text-balance text-navy mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We build the software your business runs on.
            </motion.h1>

            <motion.p
              className="text-lg text-muted leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Web platforms, mobile apps, custom software and practical AI, designed and built by a small team in Ahmedabad.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/20 transition-all duration-200"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 bg-transparent text-text border border-border font-semibold px-6 py-3.5 rounded-lg hover:border-text/30 hover:bg-surface hover:-translate-y-0.5 transition-all duration-200"
              >
                View our work
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { value: '3+', label: 'Projects delivered' },
                { value: '4', label: 'Core services' },
                { value: '100%', label: 'Client ownership' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-navy">{stat.value}</div>
                  <div className="text-xs text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <TechnicalVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}