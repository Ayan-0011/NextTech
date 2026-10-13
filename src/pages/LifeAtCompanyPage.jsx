import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger'
import FinalCTA from '../sections/home/FinalCTA'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const culturePoints = [
  {
    title: 'Work that matters',
    body: 'Every project is for a real business with real users. There\'s no throwaway work here. When something ships, it\'s because someone is relying on it.',
  },
  {
    title: 'Room to think',
    body: 'We protect deep work time. Meetings are short and purposeful. Most of the day is yours to focus.',
  },
  {
    title: 'Honest feedback',
    body: 'We review each other\'s work critically and take feedback seriously. Getting better requires being honest about what isn\'t working yet.',
  },
  {
    title: 'Small team, shared ownership',
    body: 'There\'s no separation between "our work" and "their work." Everyone knows what\'s being built and has a stake in it being good.',
  },
]

const daySchedule = [
  { time: '09:30', activity: 'Team sync — what\'s happening today, any blockers' },
  { time: '10:00', activity: 'Deep work — focused project time, no interruptions' },
  { time: '13:00', activity: 'Lunch — actual break, no working through it' },
  { time: '14:00', activity: 'Product work — builds, reviews, design sessions' },
  { time: '17:30', activity: 'End-of-day review — what moved, what\'s next' },
]

export default function LifeAtCompanyPage() {
  return (
    <main>
      {/* Hero */}
      <section data-surface="dark" className="relative overflow-hidden pt-28 pb-20 bg-forest text-white">
        <EmeraldBackdrop />
        <div className="container relative z-10">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4 block">
              Life at Nexa Tech
            </span>
            <h1 className="heading-hero text-white mb-6">
              Build. Learn. Grow together.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              What it's actually like to work here — no ping-pong tables, no motivational posters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn className="max-w-xl mb-12">
            <h2 className="heading-section text-forest">How we work</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-5">
            {culturePoints.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-surface border border-border rounded-xl p-7">
                  <h3 className="text-lg font-bold text-forest mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team environment */}
      <section className="section-padding bg-surface">
        <div className="container max-w-3xl">
          <FadeIn>
            <h2 className="heading-section text-forest mb-6">The environment</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We work out of a small office in Ahmedabad — a straightforward space with good desks, reliable internet and a whiteboard that gets a lot of use.
              </p>
              <p>
                The team is in the office most days, which makes collaboration natural. But we're flexible when it makes sense — we care about the work getting done well, not about people being visible.
              </p>
              <p>
                We don't have a foosball table or kombucha on tap. We do have a team that takes their work seriously, helps each other out and doesn't take themselves too seriously.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn className="mb-10">
            <h2 className="heading-section text-forest">A few moments</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Whiteboard session', bg: '#ECFDF5' },
              { label: 'Code review', bg: '#F0FDF4' },
              { label: 'Product launch day', bg: '#FFF7ED' },
              { label: 'Team lunch', bg: '#F0FDF4' },
              { label: 'Design critique', bg: '#ECFDF5' },
              { label: 'End-of-sprint demo', bg: '#FFF7ED' },
            ].map((item) => (
              <div
                key={item.label}
                className="h-40 rounded-xl flex items-end p-4 border border-border"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-xs font-medium text-muted bg-white/80 px-2.5 py-1 rounded-md">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A normal day */}
      <section className="section-padding bg-surface">
        <div className="container max-w-2xl">
          <FadeIn className="mb-10">
            <h2 className="heading-section text-forest mb-3">A normal day</h2>
            <p className="text-muted">Not every day is the same — but most of them look something like this.</p>
          </FadeIn>
          <div className="space-y-0">
            {daySchedule.map((item, i) => (
              <FadeIn key={item.time} delay={i * 0.08}>
                <div className="flex gap-6 py-5 border-b border-border last:border-0">
                  <div className="w-16 flex-shrink-0 text-sm font-bold text-brand">{item.time}</div>
                  <div className="text-text text-sm leading-relaxed">{item.activity}</div>
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
