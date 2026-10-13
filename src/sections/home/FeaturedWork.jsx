import { projects } from '../../data/projects'
import ProjectCard from '../../components/cards/ProjectCard'
import FadeIn from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/Stagger'
import { Link } from 'react-router-dom'

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
              Work
            </span>
            <h2 className="heading-section text-forest mb-4">Selected work</h2>
            <p className="text-lg text-muted leading-relaxed">
              A few examples of products we've designed and built.
            </p>
          </div>
          <Link
            to="/work"
            className="flex-shrink-0 text-sm font-semibold text-brand hover:gap-3 inline-flex items-center gap-2 transition-all duration-200"
          >
            View all work <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
