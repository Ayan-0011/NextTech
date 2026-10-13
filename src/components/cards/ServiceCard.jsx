import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ number, title, short, to }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <Link
        to={to || '/services'}
        className="group block bg-surface border border-border rounded-xl p-8 hover:border-brand/30 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-6">
          <span className="text-xs font-semibold text-muted tracking-widest uppercase">
            {number}
          </span>
          <ArrowRight
            size={18}
            className="text-muted group-hover:text-brand group-hover:translate-x-1 transition-all duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-brand transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed">{short}</p>
      </Link>
    </motion.div>
  )
}
