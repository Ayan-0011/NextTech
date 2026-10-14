import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqAccordion({ faqs, idPrefix }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i
        const base = `${idPrefix}-faq-${i}`
        return (
          <div key={faq.q} className="rounded-xl border border-border bg-bg">
            <h3>
              <button
                type="button"
                id={`${base}-button`}
                aria-expanded={open}
                aria-controls={`${base}-panel`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left font-semibold text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                {faq.q}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className={`flex-shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <div
              id={`${base}-panel`}
              role="region"
              aria-labelledby={`${base}-button`}
              hidden={!open}
              className="px-5 pb-5 leading-relaxed text-muted"
            >
              {faq.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}