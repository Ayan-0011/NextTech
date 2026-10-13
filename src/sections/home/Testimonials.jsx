
import { Star, Quote } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Startup Founder',
    company: 'TechVision Solutions',
    initials: 'RS',
    color: 'bg-emerald-100 text-emerald-800',
    review:
      'The team understood our vision perfectly and transformed it into a professional digital product. Their communication, attention to detail, and technical expertise were impressive.',
  },
  {
    name: 'Priya Patel',
    role: 'Project Manager',
    company: 'Innovate Labs',
    initials: 'PP',
    color: 'bg-teal-100 text-teal-800',
    review:
      'Working with this team was a smooth experience from start to finish. They delivered a clean, responsive website and made sure every detail matched our expectations.',
  },
  {
    name: 'Amit Verma',
    role: 'Business Owner',
    company: 'GrowthSphere',
    initials: 'AV',
    color: 'bg-green-100 text-green-800',
    review:
      'We needed a modern online presence for our business, and the team delivered a solution that looks professional and works beautifully across different devices.',
  },
  {
    name: 'Neha Shah',
    role: 'Marketing Director',
    company: 'DigitalEdge',
    initials: 'NS',
    color: 'bg-lime-100 text-lime-800',
    review:
      'Their approach to design and development made the entire process straightforward. The final experience feels polished, user-friendly, and aligned with our brand.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <FadeIn>
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Client Testimonials
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Trusted by businesses.
              <span className="mt-2 block text-emerald-700">
                Built on great experiences.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              We believe great partnerships start with trust, clear
              communication, and technology that delivers real value.
            </p>
          </div>
        </FadeIn>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name}>
              <article
                className="group relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/10 sm:p-8"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                {/* Quote icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                
                </div>

                {/* Review */}
                <p className="flex-1 text-sm leading-7 text-gray-600 sm:text-base">
                  “{testimonial.review}”
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />

                {/* Reviewer details */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 ring-gray-50 ${testimonial.color}`}
                  >
                    {testimonial.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="mt-1 truncate text-xs font-medium text-emerald-700">
                      {testimonial.company}
                    </p>
                  </div>

                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Bottom trust statement */}
        <FadeIn>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:mt-12">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Star size={13} className="fill-current" />
              </span>
              Every great project starts with a conversation.
            </div>
            <p className="text-sm text-gray-500">
              Let’s build something meaningful together.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
