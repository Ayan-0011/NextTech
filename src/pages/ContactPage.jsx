import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import FadeIn from '../components/animations/FadeIn'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, LoaderCircle } from 'lucide-react'
import EmeraldBackdrop from '../components/ui/EmeraldBackdrop'

const REDIRECT_SECONDS = 5

const projectTypes = [
  'Web Development',
  'Mobile App',
  'Custom Software',
  'AI & Automation',
  'Other',
]

const budgetRanges = [
  'Under ₹5 lakhs',
  '₹5–15 lakhs',
  '₹15–50 lakhs',
  '₹50 lakhs+',
  'Not sure yet',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
}

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email'
  }

  if (!form.projectType) {
    errors.projectType = 'Select a project type'
  }

  if (!form.message.trim()) {
    errors.message = 'Tell us about your project'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please add a bit more detail (20+ characters)'
  }

  return errors
}

export default function ContactPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS)

  // After success: countdown + redirect to home after 5 seconds
  useEffect(() => {
    if (!submitted) return

    setSecondsLeft(REDIRECT_SECONDS)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const countdown = setInterval(() => {
      setSecondsLeft((s) => (s > 1 ? s - 1 : 1))
    }, 1000)

    const redirect = setTimeout(() => {
      navigate('/')
    }, REDIRECT_SECONDS * 1000)

    // If the user leaves the page earlier, stop both timers
    return () => {
      clearInterval(countdown)
      clearTimeout(redirect)
    }
  }, [submitted, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: undefined,
      }))
    }

    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationErrors = validate(form)
    setErrors(validationErrors)
    setSubmitError('')

    if (Object.keys(validationErrors).length > 0) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Email service is not configured. Please try again later.')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          company: form.company.trim() || 'Not provided',
          project_type: form.projectType,
          budget: form.budget || 'Not specified',
          message: form.message.trim(),
        },
        { publicKey }
      )

      setSubmitted(true)
      setForm({ ...initialForm })
      setErrors({})
    } catch (error) {
      console.error('EmailJS submission failed:', error)
      setSubmitError(
        'We could not send your message. Please try again or email us directly.'
      )
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-text bg-bg focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-border'
    }`

  return (
    <main>
      {/* Hero */}
      <section
        data-surface="dark"
        className="relative overflow-hidden pt-28 pb-20 bg-forest text-white"
      >
        <EmeraldBackdrop />

        <div className="container relative z-10">
          <FadeIn className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4 block">
              Contact
            </span>

            <h1 className="heading-hero text-white mb-6">
              Let's build something useful.
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              Tell us what you're working on. We'll respond within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Contact information */}
            <FadeIn>
              <h2 className="text-xl font-bold text-forest mb-4">Get in touch</h2>

              <p className="text-muted leading-relaxed mb-8 text-sm">
                Whether you have a clear project brief or just an idea worth
                exploring, we're happy to talk. No commitment required.
              </p>

              <div className="space-y-5">
                <a
                  href="mailto:hello@nexatech.in"
                  className="flex items-center gap-3 text-sm text-text hover:text-brand transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-brand/30 transition-colors">
                    <Mail size={15} className="text-muted" />
                  </div>
                  hello@nexatech.in
                </a>

                <a
                  href="tel:+917940000000"
                  className="flex items-center gap-3 text-sm text-text hover:text-brand transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-brand/30 transition-colors">
                    <Phone size={15} className="text-muted" />
                  </div>
                  +91 79 4000 0000
                </a>

                <div className="flex items-center gap-3 text-sm text-muted">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center">
                    <MapPin size={15} className="text-muted" />
                  </div>
                  Ahmedabad, Gujarat, India
                </div>
              </div>
            </FadeIn>

            {/* Contact form / Thank-you card */}
            <FadeIn delay={0.15}>
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="bg-surface border border-border rounded-xl p-8 sm:p-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                    <CheckCircle size={32} className="text-brand" aria-hidden="true" />
                  </div>

                  <h2 className="text-2xl font-bold text-forest mb-3">
                    Thank you. Your message is on its way.
                  </h2>

                  <p className="text-muted leading-relaxed max-w-md mx-auto">
                    We've received your project details and will reply within one
                    business day.
                  </p>

                  <p className="mt-6 text-sm text-muted">
                    Taking you back to the home page in {secondsLeft}s.
                  </p>

                  <Link
                    to="/"
                    className="mt-4 inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-forest hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    Go to home now
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-text mb-1.5"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass('name')}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                      />

                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-text mb-1.5"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                      />

                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold text-text mb-1.5"
                    >
                      Company
                    </label>

                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass('company')}
                      placeholder="Your company name (optional)"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="block text-xs font-semibold text-text mb-1.5"
                      >
                        Project type <span className="text-red-500">*</span>
                      </label>

                      <select
                        id="contact-type"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass('projectType')}
                        required
                      >
                        <option value="">Select a type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>

                      {errors.projectType && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} />
                          {errors.projectType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-budget"
                        className="block text-xs font-semibold text-text mb-1.5"
                      >
                        Budget range
                      </label>

                      <select
                        id="contact-budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={inputClass('budget')}
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-text mb-1.5"
                    >
                      Tell us about your project{' '}
                      <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="What are you building? What problem does it solve?"
                      required
                    />

                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle size={11} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                    >
                      <AlertCircle size={17} className="shrink-0 mt-0.5" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-brand/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/20 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? (
                        <>
                          <LoaderCircle size={17} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send message →'
                      )}
                    </button>

                    <p className="text-xs text-muted mt-3">
                      Your details will be used to respond to your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}