import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ArrowRight } from 'lucide-react'
import Logo from '../brand/Logo'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

const SCROLL_THRESHOLD = 24

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {/* Floating pill at the top of the page, full-width sticky bar after scrolling */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-out ${scrolled ? 'px-0 pt-0' : 'px-3 pt-3 sm:px-6 sm:pt-4'
          }`}
      >
        <nav
          aria-label="Main navigation"
          className={`mx-auto border border-border backdrop-blur-md transition-all duration-300 ease-out ${scrolled
              ? 'max-w-full rounded-none border-x-0 border-t-0 bg-white/95 shadow-sm'
              : 'max-w-[1152px] rounded-[28px] bg-white shadow-[0_8px_30px_-12px_rgba(11,31,58,0.28)]'
            }`}
        >
          <div
            className={`mx-auto flex w-full items-center justify-between transition-all duration-300 ease-out ${scrolled ? 'h-16 max-w-[1200px] px-5 md:px-6' : 'h-14 max-w-full pl-5 pr-2'
              }`}
          >
            <Logo />

            {/* Desktop links */}
            <ul className="hidden list-none items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue ${isActive
                        ? 'bg-soft-blue text-blue'
                        : 'text-muted hover:bg-slate-100 hover:text-text'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>


            {/* Let's Talk */}
            <Link  to="/contact"
              className="group mx-1 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 md:px-5" >
              Let's Talk
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Hamburger */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}