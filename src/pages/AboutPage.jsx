import { team } from '../data/team'
import TeamCard from '../components/cards/TeamCard'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger'
import FinalCTA from '../sections/home/FinalCTA'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const beliefs = [
  { icon: '○', title: 'Build with purpose', body: 'Every feature should serve a clear need. We don\'t add complexity for its own sake.' },
  { icon: '◇', title: 'Keep learning', body: 'Technology moves. We stay current because our clients need tools that are built for today, not five years ago.' },
  { icon: '□', title: 'Speak openly', body: 'We say what we think — about timelines, technical trade-offs and when something isn\'t working.' },
  { icon: '△', title: 'Own your work', body: 'Everyone on the team takes responsibility for what they build. No hiding behind process.' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section data-surface="dark" className="relative overflow-hidden pt-28 pb-20 bg-forest text-white">
        <EmeraldBackdrop />
        <div className="container relative z-10">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4 block">
              About
            </span>
            <h1 className="heading-hero text-white mb-6">
              We build software with purpose.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A small, focused team based in Ahmedabad. We work directly with businesses to turn real operational needs into reliable software.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2 className="heading-section text-forest mb-6">Our story</h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Nexa Tech started from a straightforward observation: most small and mid-size businesses in India were either using outdated software, expensive enterprise tools that didn't fit them, or relying on spreadsheets for things that deserved better.
                </p>
                <p>
                  We built the company around a simple idea — that good software doesn't have to be complicated or expensive. It just has to solve the right problem, reliably.
                </p>
                <p>
                  Today we work with growing businesses to build web platforms, mobile applications and custom software that actually fits how they operate. We stay small intentionally. Fewer people means more accountability, faster decisions and work we're proud to put our name on.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'Projects delivered' },
                { value: '4', label: 'Core services' },
                { value: '5', label: 'Team members' },
                { value: '2023', label: 'Founded' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-forest mb-1">{stat.value}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-padding bg-surface">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-forest">What we believe</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {beliefs.map((b) => (
              <StaggerItem key={b.title}>
                <div className="bg-bg border border-border rounded-xl p-7">
                  <span className="text-lg text-muted mb-3 block">{b.icon}</span>
                  <h3 className="text-lg font-bold text-forest mb-2">{b.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-bg">
        <div className="container max-w-3xl">
          <FadeIn>
            <h2 className="heading-section text-forest mb-6">How we work</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We work directly with the people who will use the software we build. That means conversations with founders, operations managers, and the staff who deal with the day-to-day — not just a brief from a single stakeholder.
              </p>
              <p>
                Projects run in short cycles. We share work early and often, which means problems surface before they become expensive, and you always know what's being built and why.
              </p>
              <p>
                When a project is done, you own everything — the code, the designs, the documentation. We want you to be able to work with any developer in the future, not just us.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-forest mb-4">The team</h2>
            <p className="text-muted leading-relaxed">
              Five people who care about building software that works.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <TeamCard member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
