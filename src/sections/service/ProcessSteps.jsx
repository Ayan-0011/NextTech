import FadeIn from '../../components/animations/FadeIn'

export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title}>
          <FadeIn delay={Math.min(i, 2) * 0.06} className="h-full">
            <div className="h-full rounded-xl border border-border bg-bg p-6">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand">
                Step {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2 font-semibold text-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          </FadeIn>
        </li>
      ))}
    </ol>
  )
}