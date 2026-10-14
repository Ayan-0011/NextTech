import FadeIn from '../../components/animations/FadeIn'
import { getIcon } from '../../components/ui/serviceIcons'

export default function TechGroups({ groups }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => {
        const Icon = getIcon(group.icon)
        return (
          <FadeIn key={group.id}>
            <div className="mb-6 flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest text-emerald-300">
                <Icon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-forest">{group.title}</h3>
                <p className="text-sm text-muted">{group.intro}</p>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={item.name} className="rounded-xl border border-border bg-bg p-5">
                  <h4 className="mb-1 text-sm font-semibold text-text">{item.name}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        )
      })}
    </div>
  )
}