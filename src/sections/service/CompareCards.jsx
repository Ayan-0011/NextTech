import FadeIn from '../../components/animations/FadeIn'

export default function CompareCards({ columns }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {columns.map((col, i) => (
        <li key={col.title}>
          <FadeIn delay={i * 0.08} className="h-full">
            <div className="h-full rounded-xl border border-border bg-surface p-7">
              <h3 className="mb-3 text-lg font-semibold text-forest">{col.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">{col.text}</p>
              <ul className="space-y-2 border-t border-border pt-5">
                {col.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-text">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </li>
      ))}
    </ul>
  )
}