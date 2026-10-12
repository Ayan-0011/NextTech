import { careers } from '../data/careers'
import CareerCard from '../components/cards/CareerCard'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger'

const whyJoin = [
  { title: 'Real product ownership', body: 'You\'ll work on the actual product, not sub-tasks handed down from three levels above.' },
  { title: 'Continuous learning', body: 'Small teams move fast. You\'ll see more of the product lifecycle here than in most larger companies.' },
  { title: 'Modern technologies', body: 'We use current tools — React, TypeScript, Node.js — and we keep up with the field.' },
  { title: 'Small-team environment', body: 'Fewer meetings, more making. Direct communication, fast decisions.' },
]

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-navy text-white">
        <div className="container">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue/70 mb-4 block">
              Careers
            </span>
            <h1 className="heading-hero text-white mb-6">
              Build things that matter.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We're a small team building software for real businesses. If that sounds like the kind of work you want to do, read on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why join */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-navy">Why join Nexa Tech</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {whyJoin.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-surface border border-border rounded-xl p-7">
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open roles */}
      <section className="section-padding bg-surface">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-navy mb-3">Open roles</h2>
            <p className="text-muted">
              Current openings. All roles are based in Ahmedabad with hybrid flexibility.
            </p>
          </FadeIn>
          <div className="space-y-4 max-w-3xl">
            {careers.map((job) => (
              <FadeIn key={job.id}>
                <CareerCard job={job} />
              </FadeIn>
            ))}
          </div>

          {/* Open application CTA */}
          <FadeIn className="mt-12 p-8 bg-bg border border-border rounded-xl max-w-3xl">
            <h3 className="text-lg font-bold text-navy mb-2">Don't see your role?</h3>
            <p className="text-muted text-sm mb-5">
              We occasionally hire for roles not listed here. If you think you'd fit in and want to build something meaningful, send your profile.
            </p>
            <a
              href="mailto:careers@nexatech.in"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-navy/90 transition-all hover:-translate-y-0.5 text-sm"
            >
              Send your profile →
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
