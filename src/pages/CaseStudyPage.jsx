import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import FadeIn from '../components/animations/FadeIn'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) return <Navigate to="/work" replace />

  const next = projects[(projectIndex + 1) % projects.length]

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-28 pb-20"
        style={{ backgroundColor: project.color }}
      >
        <div className="container">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-text mb-8 transition-colors"
          >
            <ArrowLeft size={15} /> Back to work
          </Link>
          <FadeIn>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: project.accent + '20', color: project.accent }}
            >
              {project.category}
            </div>
            <h1 className="heading-hero text-forest mb-4">{project.name}</h1>
            <p className="text-xl text-muted leading-relaxed max-w-2xl">{project.description}</p>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={0.2} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            {[
              { label: 'Industry', value: project.industry },
              { label: 'Platform', value: project.platform },
              { label: 'Timeline', value: project.timeline },
              { label: 'Technology', value: project.tech.join(' / ') },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                  {item.label}
                </dt>
                <dd className="text-sm font-semibold text-forest">{item.value}</dd>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-bg">
        <div className="container max-w-3xl">
          {/* Challenge */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-4">The challenge</h2>
            <p className="text-lg text-muted leading-relaxed">{project.challenge}</p>
          </FadeIn>

          {/* Approach */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-4">Our approach</h2>
            <p className="text-lg text-muted leading-relaxed">{project.approach}</p>
          </FadeIn>

          {/* Solution */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-4">The solution</h2>
            <p className="text-lg text-muted leading-relaxed">{project.solution}</p>
          </FadeIn>

          {/* Features */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-6">Features</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: project.accent }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Technology */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-4">Technology</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium text-text"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn className="mb-14">
            <h2 className="heading-sm text-forest mb-6">Results</h2>
            <ul className="space-y-4">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: project.accent }}
                  />
                  <p className="text-text leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Next project */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
            Next project
          </p>
          <Link
            to={`/work/${next.slug}`}
            className="group inline-flex items-center gap-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-forest group-hover:text-brand transition-colors">
                {next.name}
              </h3>
              <p className="text-muted text-sm mt-1">{next.tagline}</p>
            </div>
            <ArrowRight
              size={22}
              className="text-muted group-hover:text-brand group-hover:translate-x-2 transition-all duration-300"
            />
          </Link>
        </div>
      </section>
    </main>
  )
}
