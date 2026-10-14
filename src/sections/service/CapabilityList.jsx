import { Check } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'

export default function CapabilityList({ items }) {
  return (
    <FadeIn>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text"
          >
            <Check size={16} className="flex-shrink-0 text-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </FadeIn>
  )
}