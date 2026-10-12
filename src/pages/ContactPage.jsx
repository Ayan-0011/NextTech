import { useState } from 'react'
import FadeIn from '../components/animations/FadeIn'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

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

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.projectType) errors.projectType = 'Select a project type'
  if (!form.message.trim()) errors.message = 'Tell us about your project'
  else if (form.message.trim().length < 20) errors.message = 'Please add a bit more detail (20+ characters)'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Demo success — no real submission
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-text bg-bg focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue transition-all ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-border'
    }`

  return (
    <main>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-navy text-white">
        <div className="container">
          <FadeIn className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue/70 mb-4 block">
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
            {/* Left */}
            <FadeIn>
              <h2 className="text-xl font-bold text-navy mb-4">Get in touch</h2>
              <p className="text-muted leading-relaxed mb-8 text-sm">
                Whether you have a clear project brief or just an idea worth exploring, we're happy to talk. No commitment required.
              </p>
              <div className="space-y-5">
                <a href="mailto:hello@nexatech.in" className="flex items-center gap-3 text-sm text-text hover:text-blue transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-blue/30 transition-colors">
                    <Mail size={15} className="text-muted" />
                  </div>
                  hello@nexatech.in
                </a>
                <a href="tel:+917940000000" className="flex items-center gap-3 text-sm text-text hover:text-blue transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-blue/30 transition-colors">
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

            {/* Right: Form */}
            <FadeIn delay={0.15}>
              {submitted ? (
                <div className="bg-surface border border-border rounded-xl p-10 text-center">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Thanks, we got your message.</h3>
                  <p className="text-muted leading-relaxed mb-2">
                    This is a demo form — no email was actually sent.
                  </p>
                  <p className="text-muted leading-relaxed text-sm">
                    To connect with us, email <a href="mailto:hello@nexatech.in" className="text-blue hover:underline">hello@nexatech.in</a> directly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' }) }}
                    className="mt-6 text-sm text-blue hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-surface border border-border rounded-xl p-8 space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-text mb-1.5">
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
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-text mb-1.5">
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
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-text mb-1.5">
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
                      <label htmlFor="contact-type" className="block text-xs font-semibold text-text mb-1.5">
                        Project type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-type"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass('projectType')}
                      >
                        <option value="">Select a type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.projectType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-semibold text-text mb-1.5">
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
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-text mb-1.5">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="What are you building? What problem does it solve?"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-blue/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/20 transition-all duration-200"
                    >
                      Send message →
                    </button>
                    <p className="text-xs text-muted mt-3">
                      This is a demo form. To actually reach us, email hello@nexatech.in
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
