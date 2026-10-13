import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/cards/ProjectCard'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger'
import FinalCTA from '../sections/home/FinalCTA'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const filters = ['All', 'Web', 'Mobile', 'SaaS', 'AI', 'Custom Software']

export default function WorkPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

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

      {/* Filter + Grid */}
      <section className="section-padding bg-bg">
        <div className="container">
          {/* Filters */}
          <FadeIn className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? 'bg-forest text-white'
                    : 'bg-surface border border-border text-muted hover:text-text hover:border-text/20'
                }`}
              >
                {f}
              </button>
            ))}
          </FadeIn>

          {filtered.length > 0 ? (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
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
