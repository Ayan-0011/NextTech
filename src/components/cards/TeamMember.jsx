function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

export default function TeamMember({ member }) {
  const { name, role, bio, image } = member

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:shadow-xl">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-emerald-300 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border border-border bg-forest">
        {image ? (
          <img
            src={image}
            alt={`Portrait of ${name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center text-xl font-semibold text-emerald-300 transition-transform duration-500 group-hover:scale-110"
          >
            {getInitials(name)}
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-forest">{name}</h3>
      {role && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand">{role}</p>
      )}
      {bio && <p className="mt-4 text-sm leading-relaxed text-muted">{bio}</p>}
    </article>
  )
}   