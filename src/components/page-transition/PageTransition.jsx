import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAnimate, useReducedMotion } from 'framer-motion'
import Logo from '../brand/Logo'

const EASE = [0.76, 0, 0.24, 1]
const COVER = 0.45 // navy grows from the centre line to fill the screen
const HOLD = 0.4 // logo stays on screen while the next page renders underneath
const REVEAL = 0.65 // navy splits open from the centre, top half up, bottom half down

const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000))

/**
 * Branded page transition.
 * Internal link clicks are intercepted: cover -> logo -> route change -> reveal from the centre.
 * Browser back/forward, new-tab clicks, hash-only links and reduced-motion users navigate normally.
 */
export default function PageTransition() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const [scope, animate] = useAnimate()
  const busy = useRef(false)

  useEffect(() => {
    if (reduceMotion) return undefined

    const play = async (to) => {
      busy.current = true
      scope.current.style.pointerEvents = 'auto'

      try {
        await Promise.all([
          animate('[data-half]', { scaleY: [0, 1] }, { duration: COVER, ease: EASE }),
          animate(
            '[data-lockup]',
            { opacity: [0, 1], y: [14, 0] },
            { duration: 0.45, delay: COVER * 0.55, ease: 'easeOut' }
          ),
        ])

        navigate(to)
        await wait(HOLD)

        await animate('[data-lockup]', { opacity: 0, y: -10 }, { duration: 0.2, ease: 'easeIn' })
        await Promise.all([
          animate('[data-half="top"]', { y: ['0%', '-100%'] }, { duration: REVEAL, ease: EASE }),
          animate('[data-half="bottom"]', { y: ['0%', '100%'] }, { duration: REVEAL, ease: EASE }),
        ])
      } finally {
        await animate('[data-half]', { scaleY: 0, y: '0%' }, { duration: 0 })
        scope.current.style.pointerEvents = 'none'
        busy.current = false
      }
    }

    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const link = event.target.closest?.('a[href]')
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname) return // same page: normal behaviour

      // preventDefault only: the link's own onClick (e.g. closing the mobile menu) still runs.
      event.preventDefault()
      if (busy.current) return
      play(url.pathname + url.search + url.hash)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [navigate, animate, scope, reduceMotion])

  return (
    <div ref={scope} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div data-half="top" className="absolute inset-x-0 top-0 h-[50.5%] origin-bottom scale-y-0 bg-white" />
      <div data-half="bottom" className="absolute inset-x-0 bottom-0 h-[50.5%] origin-top scale-y-0 bg-white" />
      <div data-lockup className="absolute inset-0 flex items-center justify-center opacity-0">
        <Logo variant="dark" size={64} stacked to={null} />
      </div>
    </div>
  )
}