import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TechnicalVisual from './TechnicalVisual'
import EmeraldBackdrop from '../../components/ui/EmeraldBackdrop'

export default function Hero() {
  return (
    <section
      data-surface="dark"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest pb-12 pt-24 md:pb-16 md:pt-28"
    >
      {/* Deep emerald atmosphere: glows, faded grid, top edge (shared with FinalCTA's look) */}
      <EmeraldBackdrop variant="hero" />

      <div className="container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-6">
                <span className="w-6 h-px bg-emerald-300" />
                Software Development
              </span>
            </motion.div>

            <motion.h1
              className="heading-hero text-balance text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              We build the <span className="text-accent">software</span> your business runs on.
            </motion.h1>

            <motion.p
              className="text-lg text-emerald-50/75 leading-relaxed mb-8 max-w-xl"
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
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-forest shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-mint-soft hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3.5 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/40"
              >
                View our work
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/15"
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
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-emerald-50/65 mt-0.5">{stat.label}</div>
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