import { services } from '../../data/services'
import ServiceCard from '../../components/cards/ServiceCard'
import FadeIn from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/Stagger'

export default function ServicesSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container">
        <FadeIn className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand mb-4 block">
            Services
          </span>
          <h2 className="heading-section text-forest mb-5">What we build</h2>
          <p className="text-lg text-muted leading-relaxed">
            From customer-facing products to internal business systems, we build software around real business needs.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <ServiceCard
                number={service.number}
                title={service.title}
                short={service.short}
                to={`/services#${service.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
