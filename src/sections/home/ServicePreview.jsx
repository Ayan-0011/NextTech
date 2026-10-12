// Tiny product illustrations shown in the hero hub, one per service.
// Drawn in the site palette so they feel like part of the brand, not stock art.

const frame = 'fill-white stroke-slate-300'
const block = 'fill-slate-100'
const accent = 'fill-blue'
const tint = 'fill-soft-blue'

const previews = {
  'web-development': (
    <>
      <rect x="1" y="1" width="118" height="82" rx="8" className={frame} strokeWidth="1" />
      <line x1="1" y1="16" x2="119" y2="16" className="stroke-slate-200" strokeWidth="1" />
      <circle cx="9" cy="8.5" r="2" className="fill-slate-300" />
      <circle cx="16" cy="8.5" r="2" className="fill-slate-300" />
      <circle cx="23" cy="8.5" r="2" className="fill-slate-300" />
      <rect x="9" y="23" width="102" height="14" rx="3" className={tint} />
      <rect x="14" y="28" width="30" height="4" rx="2" className={accent} />
      <rect x="9" y="43" width="49" height="32" rx="3" className={block} />
      <rect x="62" y="43" width="49" height="32" rx="3" className={block} />
    </>
  ),
  'mobile-applications': (
    <>
      <rect x="38" y="1" width="44" height="82" rx="10" className={frame} strokeWidth="1" />
      <rect x="45" y="10" width="30" height="16" rx="3" className={block} />
      <rect x="45" y="31" width="30" height="16" rx="3" className={block} />
      <rect x="45" y="52" width="30" height="16" rx="3" className={tint} />
      <rect x="49" y="58" width="14" height="4" rx="2" className={accent} />
      <rect x="53" y="74" width="14" height="3" rx="1.5" className="fill-slate-300" />
    </>
  ),
  'custom-software': (
    <>
      <rect x="1" y="2" width="36" height="22" rx="4" className={block} />
      <rect x="42" y="2" width="36" height="22" rx="4" className={block} />
      <rect x="83" y="2" width="36" height="22" rx="4" className={block} />
      <rect x="6" y="14" width="16" height="5" rx="2" className={accent} />
      <rect x="1" y="30" width="118" height="53" rx="5" className={frame} strokeWidth="1" />
      <line x1="1" y1="44" x2="119" y2="44" className="stroke-slate-200" strokeWidth="1" />
      <line x1="1" y1="58" x2="119" y2="58" className="stroke-slate-200" strokeWidth="1" />
      <line x1="1" y1="71" x2="119" y2="71" className="stroke-slate-200" strokeWidth="1" />
      <rect x="8" y="35" width="30" height="4" rx="2" className="fill-slate-300" />
      <rect x="8" y="49" width="44" height="4" rx="2" className="fill-slate-300" />
      <rect x="8" y="63" width="24" height="4" rx="2" className="fill-slate-300" />
    </>
  ),
  'ai-automation': (
    <>
      <rect x="2" y="4" width="70" height="20" rx="8" className={block} />
      <rect x="8" y="11" width="40" height="4" rx="2" className="fill-slate-300" />
      <rect x="48" y="30" width="70" height="18" rx="8" className={tint} />
      <rect x="56" y="37" width="38" height="4" rx="2" className={accent} />
      <rect x="2" y="54" width="82" height="20" rx="8" className={block} />
      <rect x="8" y="61" width="52" height="4" rx="2" className="fill-slate-300" />
      <circle cx="104" cy="70" r="5" className={accent} opacity="0.25" />
    </>
  ),
}

export default function ServicePreview({ slug }) {
  return (
    <svg viewBox="0 0 120 84" className="h-full w-full" aria-hidden="true">
      {previews[slug]}
    </svg>
  )
}