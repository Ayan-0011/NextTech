import { Target, BookOpen, MessageCircle, ShieldCheck } from 'lucide-react'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { team } from '../data/team'
import TeamMember from '../components/cards/TeamMember'
import FadeIn from '../components/animations/FadeIn'
import CountUp from '../components/animations/CountUp'
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger'
import FinalCTA from '../sections/home/FinalCTA'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const beliefs = [
  { icon: Target, title: 'Build with purpose', body: "Every feature should serve a clear need. We don't add complexity for its own sake." },
  { icon: BookOpen, title: 'Keep learning', body: 'Technology moves. We stay current because our clients need tools that are built for today, not five years ago.' },
  { icon: MessageCircle, title: 'Speak openly', body: "We say what we think, about timelines, technical trade-offs and when something isn't working." },
  { icon: ShieldCheck, title: 'Own your work', body: 'Everyone on the team takes responsibility for what they build. No hiding behind process.' },
]

const workSteps = [
  { title: 'Work with the real users', body: 'We talk to founders, operations managers and the staff who deal with the day-to-day, not just one stakeholder.' },
  { title: 'Ship in short cycles', body: "We share work early and often, so problems surface before they become expensive and you always know what's being built and why." },
  { title: 'You own everything', body: 'When a project is done, the code, designs and documentation are yours. You can work with any developer in the future, not just us.' },
]

export default function AboutPage() {
  const stats = [
    { value: projects.length, label: 'Projects delivered' },
    { value: services.length, label: 'Core services' },
    { value: team.length, label: 'Team members' },
    { value: 2023, label: 'Founded', static: true },
  ]

  return (
    <main>
      {/* Hero + stats */}
      <section data-surface="dark" className="relative overflow-hidden bg-forest pt-28 text-white">
        <EmeraldBackdrop />
        <div className="container relative z-10">
          <FadeIn className="max-w-2xl pb-16">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-emerald-300">
              About
            </span>
            <h1 className="heading-hero mb-6 text-white">We build software with purpose.</h1>
            <p className="text-xl leading-relaxed text-white/70">
              A small, focused team based in Ahmedabad. We work directly with businesses to turn real operational needs into reliable software.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <dl className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-8 pr-6 ${i % 2 === 1 ? 'pl-6' : ''} ${i > 0 ? 'lg:border-l lg:border-white/15 lg:pl-8' : ''} ${i === 2 ? 'border-t border-white/15 lg:border-t-0' : ''} ${i === 3 ? 'border-t border-l border-white/15 lg:border-t-0' : ''} ${i === 1 ? 'border-l border-white/15' : ''}`}
                >
                  <dd className="mb-1 text-4xl font-bold text-white sm:text-5xl">
                    {stat.static ? stat.value : <CountUp to={stat.value} />}
                  </dd>
                  <dt className="text-sm text-white/60">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand">
                Our story
              </span>
              <h2 className="heading-section mb-6 text-forest">Good software doesn't have to be complicated.</h2>
              <p className="border-l-2 border-emerald-300 pl-4 text-sm font-medium text-text">
                Founded in 2023 in Ahmedabad. Small by choice.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-5 leading-relaxed text-muted lg:col-span-7">
              <p>
                Nexa Tech started from a straightforward observation: most small and mid-size businesses in India were either using outdated software, expensive enterprise tools that didn't fit them, or relying on spreadsheets for things that deserved better.
              </p>
              <p>
                We built the company around a simple idea: good software just has to solve the right problem, reliably.
              </p>
              <p>
                Today we work with growing businesses to build web platforms, mobile applications and custom software that actually fits how they operate. We stay small intentionally. Fewer people means more accountability, faster decisions and work we're proud to put our name on.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section-padding bg-surface">
        <div className="container">
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="heading-section text-forest">What we believe</h2>
          </FadeIn>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title} className="h-full">
                <div className="group h-full rounded-xl border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-forest text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-forest">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How we work */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="heading-section text-forest">How we work</h2>
          </FadeIn>
          <ol className="grid gap-5 md:grid-cols-3">
            {workSteps.map((step, i) => (
              <li key={step.title}>
                <FadeIn delay={i * 0.08} className="h-full">
                  <div className="group h-full rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-lg">
                    <span className="mb-4 block text-4xl font-bold text-forest/15 transition-colors duration-300 group-hover:text-emerald-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-forest">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-surface">
        <div className="container">
          <FadeIn className="mb-12 max-w-xl">
            <h2 className="heading-section mb-4 text-forest">The team</h2>
            <p className="leading-relaxed text-muted">
              {team.length} people who care about building software that works.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <TeamMember member={member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}