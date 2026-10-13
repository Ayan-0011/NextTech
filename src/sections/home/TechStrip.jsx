const techs = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'React Native',
  'Express', 'Git',
]

export default function TechStrip() {
  const doubled = [...techs, ...techs]

  return (
    <section className="py-10 border-y border-border overflow-hidden bg-surface">
      <div className="container mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center">
          Built with modern technology
        </p>
      </div>
      <div className="relative mt-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-sm font-semibold text-muted/70 flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              {tech}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
