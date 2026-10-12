import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  arrow = false,
  className = '',
  type = 'button',
  disabled = false,
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-blue text-white px-6 py-3 hover:bg-blue/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/20',
    secondary:
      'bg-transparent text-text border border-border px-6 py-3 hover:border-text/30 hover:bg-surface hover:-translate-y-0.5',
    ghost:
      'bg-transparent text-blue px-0 py-1 hover:gap-3',
    'white':
      'bg-white text-navy px-6 py-3 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg',
    'white-outline':
      'bg-transparent text-white border border-white/30 px-6 py-3 hover:bg-white/10 hover:border-white/60',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${classes}`}>
      {content}
    </button>
  )
}
