import { Link } from 'react-router-dom'
import NLogo from '../brand/NLogo'
import { Linkedin, Github, Instagram } from 'lucide-react'
import Logo from '../brand/Logo'

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Life at Nexa Tech', to: '/life-at-company' },
    { label: 'Careers', to: '/careers' },
  ],
  Services: [
    { label: 'Web Development', to: '/services#web-development' },
    { label: 'Mobile Applications', to: '/services#mobile-applications' },
    { label: 'Custom Software', to: '/services#custom-software' },
    { label: 'AI & Automation', to: '/services#ai-automation' },
  ],
  Work: [
    { label: 'Case Studies', to: '/work' },
  ],
  Contact: [
    { label: 'hello@nexatech.in', href: 'mailto:hello@nexatech.in' },
    { label: '+91 79 4000 0000', href: 'tel:+917940000000' },
    { label: 'Ahmedabad, Gujarat', to: null },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20">
      <div className="container py-17 ">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-lg mb-4">
                <Logo variant="light" size={30} />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mt-4">
              Building useful digital products for growing businesses.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-white/60">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nexa Tech. Demo website — fictional company.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
