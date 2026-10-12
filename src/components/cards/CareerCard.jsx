import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CareerCard({ job }) {
  const { title, tech, location, type, description, responsibilities, requirements } = job
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue/20">
      <button
        className="w-full text-left p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-inset"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-text">{title}</h3>
            <p className="text-sm text-blue font-medium mt-0.5">{tech}</p>
            <div className="flex flex-wrap gap-4 mt-3">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} /> {location}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <Clock size={13} /> {type}
              </span>
            </div>
          </div>
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted transition-transform duration-300 ${
              expanded ? 'rotate-90' : ''
            }`}
          >
            <ArrowRight size={14} />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 border-t border-border">
              <p className="text-sm text-muted leading-relaxed mt-5 mb-5">{description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                    What you'll do
                  </h4>
                  <ul className="space-y-2">
                    {responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                    What we're looking for
                  </h4>
                  <ul className="space-y-2">
                    {requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue mt-2 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <a
                  href="mailto:careers@nexatech.in"
                  className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy/90 transition-all hover:-translate-y-0.5"
                >
                  Apply for this role <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
