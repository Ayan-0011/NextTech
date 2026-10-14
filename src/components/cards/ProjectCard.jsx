import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ProjectVisual from '../ui/ProjectVisual'

export default function ProjectRow({ project, index }) {
  const [imgFailed, setImgFailed] = useState(false)
  const { slug, name, tagline, category, description, industry, timeline, tech, image, accent } = project
  const reversed = index % 2 === 1

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl">
      <div className="grid lg:grid-cols-2">
        {/* Image - 50% */}
        <Link
          to={`/work/${slug}`}
          aria-label={`View ${name} case study`}
          className={`relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px] ${
            reversed ? 'lg:order-2' : ''
          }`}
        >
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
            {image && !imgFailed ? (
              <img
                src={image}
                alt={`${name} project preview`}
                loading="lazy"
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProjectVisual category={category} title={name} />
            )}
          </div>
          <div className="absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/10" />
          <span className="absolute left-5 top-5 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
            {category}
          </span>
        </Link>

        {/* Details - 50% */}
        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {industry} <span aria-hidden="true">·</span> {timeline}
          </p>
          <h2 className="mb-2 text-2xl font-semibold text-text sm:text-3xl">{name}</h2>
          <p className="mb-5 text-base font-medium text-forest">{tagline}</p>
          <p className="mb-6 leading-relaxed text-muted">{description}</p>

          <ul className="mb-8 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map((t) => (
              <li key={t} className="rounded-md border border-border px-3 py-1 text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>

          <Link
            to={`/work/${slug}`}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          >
            <span className="border-b border-transparent transition-colors group-hover:border-forest">
              View case study
            </span>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}