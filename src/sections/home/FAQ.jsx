
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'

const faqs = [
  {
    question: 'What services does Nexa Tech provide?',
    answer:
      'We provide web development, custom software solutions, UI/UX design, and modern digital experiences tailored to business needs.',
  },
  {
    question: 'How does your development process work?',
    answer:
      'Our process starts with understanding your requirements, followed by planning, design, development, testing, and deployment. We keep you involved throughout the project.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Project timelines depend on the scope and complexity. A small website may take a few weeks, while a larger custom application may require more time.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer:
      'Yes, we work with businesses of different sizes, including startups and growing companies, to build practical and scalable digital solutions.',
  },
  {
    question: 'Can you maintain or improve an existing website?',
    answer:
      'Absolutely. We can improve performance, fix bugs, refresh the design, add new features, and help maintain your existing website or application.',
  },
  {
    question: 'How can I get started with Nexa Tech?',
    answer:
      'You can contact our team through the contact page and share your project requirements. We will review your needs and discuss the next steps.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-20 sm:py-24"
      style={{ color: 'var(--forest)' }}>
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{
              background: 'var(--mint-soft)',
              color: 'var(--brand)',
            }}>
            FAQ
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--forest)' }} >
            Frequently asked{' '}
            <span style={{ color: 'var(--brand)' }}>
              questions
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-7 sm:text-lg"
            style={{ color: 'var(--muted)' }}>
            Have questions about our services or process?
            Find the answers you need right here.
          </p>
        </FadeIn>

        {/* FAQ Accordion */}
        <FadeIn className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border transition-all duration-300"
                  style={{
                    borderColor: isOpen
                      ? 'var(--brand)'
                      : 'var(--border)',
                    background: '#FFFFFF',
                    boxShadow: isOpen
                      ? '0 8px 28px rgba(5, 59, 51, 0.06)'
                      : 'none',
                  }} >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6">
                    <span
                      className="text-sm font-semibold leading-6 sm:text-base"
                      style={{
                        color: isOpen
                          ? 'var(--brand)'
                          : 'var(--forest)',
                      }} >
                      {faq.question}
                    </span>

                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300"
                      style={{
                        background: isOpen
                          ? 'var(--forest)'
                          : 'var(--mint-soft)',
                        color: isOpen
                          ? '#FFFFFF'
                          : 'var(--brand)',
                      }} >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }`} >
                    <div className="overflow-hidden">
                      <p
                        className="px-5 pb-6 text-sm leading-7 sm:px-7 sm:pb-7 sm:text-base"
                        style={{ color: 'var(--muted)' }} >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* Contact CTA */}
        <FadeIn className="mt-12 text-center">
          <p className="mb-4 text-sm"
            style={{ color: 'var(--muted)' }} >
            Still have questions?
          </p>

          <a href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'var(--mint-soft)',
              color: 'var(--forest)',
            }} >
            Talk to our team
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>

      </div>
    </section>
  )
}
