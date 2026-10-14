import FadeIn from '../../components/animations/FadeIn'

export default function SectionShell({ id, title, intro, tone = 'bg', align = 'left', children }) {
  const centered = align === 'center'

  return (
    <section id={id} className={`section-padding ${tone === 'bg' ? 'bg-bg' : 'bg-surface'}`}>
      <div className="container">
        <FadeIn className={`mb-12 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
          <h2 className="heading-section mb-4 text-forest">{title}</h2>
          {intro && <p className="text-lg leading-relaxed text-muted">{intro}</p>}
        </FadeIn>
        {children}
      </div>
    </section>
  )
}