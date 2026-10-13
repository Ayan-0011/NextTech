import { Link } from 'react-router-dom'

function Block({ block }) {
  if (typeof block === 'string') {
    return <p className="leading-relaxed text-emerald-900/80">{block}</p>
  }
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-emerald-900/80 marker:text-emerald-600">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function LegalLayout({ title, updated, intro, sections }) {
  return (
    <main className="bg-white">
      {/* Header: top padding fixed navbar ke liye hai, apne navbar height ke hisaab se adjust karna */}
      <header className="border-b border-emerald-100 bg-gradient-to-b from-emerald-50 to-white pb-12 pt-32 sm:pt-36 lg:pb-16 lg:pt-40">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-forest-deep sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-emerald-800">{intro}</p>
          <p className="mt-6 text-sm text-emerald-700">Last updated: {updated}</p>
        </div>
      </header>

      <div className="container grid gap-10 py-12 sm:py-16 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-20">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={`${title} contents`}>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-600">
              On this page
            </h2>
            <ol className="space-y-2.5 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-sm text-emerald-800 transition-colors hover:text-emerald-950 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <article className="min-w-0 max-w-3xl space-y-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-xl font-semibold text-forest-deep sm:text-2xl">
                {i + 1}. {s.title}
              </h2>
              <div className="mt-4 space-y-4">
                {s.body.map((block, idx) => (
                  <Block key={idx} block={block} />
                ))}
              </div>
            </section>
          ))}

          <p className="border-t border-emerald-100 pt-8 text-sm text-emerald-700">
            Questions about this page? Write to us at{' '}
            <a
              href="mailto:hello@nexatech.in"
              className="font-medium text-emerald-800 underline underline-offset-4 hover:text-emerald-950"
            >
              hello@nexatech.in
            </a>{' '}
            or visit our <Link to="/" className="font-medium underline underline-offset-4 hover:text-emerald-950">home page</Link>.
          </p>
        </article>
      </div>
    </main>
  )
}