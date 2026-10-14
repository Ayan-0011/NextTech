import FadeIn from '../../components/animations/FadeIn'
import { getIcon } from '../../components/ui/serviceIcons'

export default function FeatureGrid({ items, cardTone = 'surface' }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => {
        const Icon = getIcon(item.icon)
        return (
          <li key={item.title}>
            <FadeIn delay={Math.min(i, 3) * 0.05} className="h-full">
              <div
                className={`h-full rounded-xl border border-border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-text/20 ${
                  cardTone === 'surface' ? 'bg-surface' : 'bg-bg'
                }`}
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-semibold text-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </FadeIn>
          </li>
        )
      })}
    </ul>
  )
}