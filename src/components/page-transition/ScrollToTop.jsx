import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Runs after every route change. Jumps (never animates) so it stays hidden
 * behind the page transition. Supports #anchor links such as /services#web-development.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}