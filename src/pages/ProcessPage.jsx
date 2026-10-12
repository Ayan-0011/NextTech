// import ProcessSection from '../sections/home/ProcessSection'
import FadeIn from '../components/animations/FadeIn'
import FinalCTA from '../sections/home/FinalCTA'

export default function ProcessPage() {
  return (
    <main>
      <section className="pt-28 pb-20 bg-navy text-white">
        <div className="container">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue/70 mb-4 block">
              Process
            </span>
            <h1 className="heading-hero text-white mb-6">
              How we work.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A clear process results in better products, fewer surprises and more confident decisions at every stage of a project.
            </p>
          </FadeIn>
        </div>
      </section>

      <ProcessSection />

      {/* Principles */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-navy">A few things we believe</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Research before design',
                body: 'Every decision should be traceable back to a real user need or a specific business requirement. We don\'t design in a vacuum.',
              },
              {
                title: 'Incremental delivery',
                body: 'We ship in small cycles, not big-bang releases. This means you see progress regularly and can course-correct before too much is built.',
              },
              {
                title: 'Honest estimates',
                body: 'We\'d rather tell you a project takes longer than overpromise and underdeliver. Realistic timelines lead to better outcomes.',
              },
              {
                title: 'Code you can own',
                body: 'Everything we build belongs to you. The codebase should be maintainable by any competent developer, not locked to us.',
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="bg-surface border border-border rounded-xl p-7">
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
