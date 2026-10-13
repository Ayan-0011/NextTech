import { Link } from 'react-router-dom'
import NLogo from './NLogo'
import { BRAND_NAME } from '../../data/brand'

const tones = {
  dark: 'text-forest',
  light: 'text-white',
}

/**
 * The one place the N mark and company name are combined.
 * Use this everywhere the brand appears (navbar, menu, footer, transition).
 * To change the logo, edit NLogo.jsx. To rename the company, edit data/brand.js.
 */
export default function Logo({
  variant = 'dark',
  size = 28,
  showName = true,
  stacked = false,
  to = '/',
  onClick,
  className = '',
}) {
  const classes = `inline-flex items-center ${stacked ? 'flex-col gap-4' : 'gap-2.5'} rounded-md font-bold tracking-tight leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${tones[variant]} ${className}`

  const content = (
    <>
      <NLogo size={size} light={variant === 'light'} />
      {showName && <span style={{ fontSize: Math.round(size * (stacked ? 0.45 : 0.64)) }}>{BRAND_NAME}</span>}
    </>
  )

  if (!to) {
    return <span className={classes}>{content}</span>
  }

  return (
    <Link to={to} onClick={onClick} className={classes} aria-label={`${BRAND_NAME} home`}>
      {content}
    </Link>
  )
}