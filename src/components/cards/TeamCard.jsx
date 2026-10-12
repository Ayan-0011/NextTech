export default function TeamCard({ member }) {
  const { name, role, bio, initials } = member

  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center text-white font-bold text-base mb-4">
        {initials}
      </div>
      <h3 className="text-base font-bold text-text">{name}</h3>
      <p className="text-sm text-blue font-medium mt-0.5 mb-3">{role}</p>
      <p className="text-sm text-muted leading-relaxed">{bio}</p>
    </div>
  )
}
