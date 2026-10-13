export default function NLogo({ size = 32, light = false, className = '' }) {
  const tile = light ? '#FFFFFF' : '#053B33'
  const stem = light ? '#053B33' : '#FFFFFF'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true" >
      <rect width="32" height="32" rx="8" fill={tile} />
      <rect x="7.5" y="7.5" width="5" height="17" fill={stem} />
      <rect x="19.5" y="7.5" width="5" height="17" fill={stem} />
      <path
        d="M7.5 7.5h5L24.5 24.5h-5z"
        fill={light ? '#047857' : '#10B981'}
        stroke={tile}
        strokeWidth="2"
        paintOrder="stroke"
      />
    </svg>
  )
}

/** Large version for the page transition. Same mark, bigger. */
export function NLogoLarge({ size = 64, white = false, className = '' }) {
  return <NLogo size={size} light={white} className={className} />
}