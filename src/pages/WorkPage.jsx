import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectRow from '../components/cards/ProjectCard'
import FadeIn from '../components/animations/FadeIn'
import FinalCTA from '../sections/home/FinalCTA'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const filters = ['All', 'Web', 'Mobile', 'SaaS', 'AI', 'Custom Software']

const countFor = (f) =>
  f === 'All' ? projects.length : projects.filter((p) => p.category === f).length

export default function WorkPage() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <main>
      {/* Hero */}
      <section data-surface="dark" className="relative overflow-hidden pt-28 pb-20 bg-forest text-white">
        <EmeraldBackdrop />
        <div className="container relative z-10">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4 block">
              Work
            </span>
            <h1 className="heading-hero text-white mb-6">
              Work that solves real problems.
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A collection of products we've designed and built. Every project started with a real business problem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + List */}
      <section className="section-padding bg-bg">
        <div className="container">
          <FadeIn>
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                    active === f
                      ? 'bg-forest text-white'
                      : 'bg-surface border border-border text-muted hover:text-text hover:border-text/20'
                  }`}
                >
                  {f}
                  <span className={`ml-2 text-xs ${active === f ? 'text-white/60' : 'text-muted/70'}`}>
                    {countFor(f)}
                  </span>
                </button>
              ))}
            </div>
          </FadeIn>

          {filtered.length > 0 ? (
            <div className="flex flex-col gap-8 lg:gap-10">
              {filtered.map((project, i) => (
                <FadeIn key={`${active}-${project.slug}`}>
                  <ProjectRow project={project} index={i} />
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}