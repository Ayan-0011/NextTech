import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { X } from 'lucide-react'
import NLogo from '../brand/NLogo'
import Logo from '../brand/Logo'

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-xs bg-white flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <Link
                to="/"
                onClick={onClose}
                className="flex items-center gap-2.5 font-bold text-navy text-lg">
                <Logo size={26} onClick={onClose} />
               
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-bg transition-colors"
                aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-4 pt-4 flex-1">
              {links.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `px-3 py-3.5 text-base font-medium rounded-lg transition-colors ${
                      isActive ? 'text-blue bg-soft-blue' : 'text-text hover:bg-bg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

            </nav>

            {/* CTA */}
            <div className="px-4 pb-8">
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-3.5 rounded-lg hover:bg-navy/90 transition-all" >
                Let's Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
