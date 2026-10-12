import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, featured = false }) {
  const { slug, name, tagline, category, tech, color, accent } = project

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}>
      <Link
        to={`/work/${slug}`}
        className="group block bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-border/60 transition-all duration-300">
        {/* Project visual */}
        <div
          className="h-48 flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: color }} >
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: accent }}>
              {name[0]}
            </div>
            <span className="text-xs font-semibold" style={{ color: accent }}>
              {category}
            </span>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-text group-hover:text-blue transition-colors duration-200">
                {name}
              </h3>
              <p className="text-sm text-muted mt-1">{tagline}</p>
            </div>
            <ArrowRight
              size={18}
              className="text-muted group-hover:text-blue group-hover:translate-x-1 mt-0.5 flex-shrink-0 transition-all duration-300"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 bg-bg rounded-md text-muted font-medium border border-border">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
