import { Link } from 'react-router-dom'
import { Linkedin, Github, Instagram } from 'lucide-react'
import Logo from '../brand/Logo'

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
  ],
  Services: [
    { label: 'Web Development', to: '/services#web-development' },
    { label: 'Mobile Applications', to: '/services#mobile-applications' },
    { label: 'Custom Software', to: '/services#custom-software' },
    { label: 'AI & Automation', to: '/services#ai-automation' },
  ],
  Work: [{ label: 'Case Studies', to: '/work' }],
  Contact: [
    { label: 'hello@nexatech.in', href: 'mailto:hello@nexatech.in' },
    { label: '+91 79 4000 0000', href: 'tel:+917940000000' },
    { label: 'Ahmedabad, Gujarat', to: null },
  ],
}

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com', Icon: Github },
  { label: 'Instagram', href: 'https://instagram.com', Icon: Instagram },
]

const linkClass =
  'text-sm text-emerald-800 hover:text-emerald-950 hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm break-words'

export default function Footer() {
  return (
    <footer
      data-surface="light"
      className="relative overflow-hidden border-t py-10 md:py-0 border-emerald-100 bg-gradient-to-b from-white via-emerald-50/50 to-emerald-100/60 text-emerald-800"
    >
      {/* soft glow, decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="container relative z-10 py-14 sm:py-16 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" aria-label="Nexa Tech home" className="inline-flex items-center">
              <Logo variant="dark" size={30} />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-emerald-800">
              Building useful digital products for growing businesses.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-200 bg-white/70 text-emerald-700 transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <nav key={section} aria-label={section} className="min-w-0">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} className={linkClass}>
                        {link.label}
                      </a>
                    ) : link.to ? (
                      <Link to={link.to} className={linkClass}>
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-emerald-800">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-emerald-200/60 pt-6 sm:mt-14 sm:flex-row sm:items-center">
          <p className="text-xs text-emerald-700">
            © {new Date().getFullYear()} NexaTech. Demo website — company.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className={`${linkClass} text-xs`}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={`${linkClass} text-xs`}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}