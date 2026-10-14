import { useParams, Navigate } from 'react-router-dom'
import { serviceDetails } from '../data/serviceDetails'
import ServiceHero from '../sections/service/ServiceHero'
import SectionShell from '../sections/service/SectionShell'
import FeatureGrid from '../sections/service/FeatureGrid'
import TechGroups from '../sections/service/TechGroups'
import CompareCards from '../sections/service/CompareCards'
import CapabilityList from '../sections/service/CapabilityList'
import ProcessSteps from '../sections/service/ProcessSteps'
import FaqAccordion from '../sections/service/FaqAccordion'
import ServiceCTA from '../sections/service/ServiceCTA'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceDetails[slug]

  if (!service) return <Navigate to="/services" replace />

  let n = 0
  const tone = () => (n++ % 2 === 0 ? 'bg' : 'surface')

  return (
    <main>
      <ServiceHero service={service} />

      {(() => { const t = tone(); return (
        <SectionShell title={service.whatWeBuildTitle} intro={service.whatWeBuildIntro} tone={t}>
          <FeatureGrid items={service.whatWeBuild} cardTone={t === 'bg' ? 'surface' : 'bg'} />
        </SectionShell>
      )})()}

      <SectionShell id="technologies" title="Technologies" intro="The tools we use, grouped by what they do." tone={tone()}>
        <TechGroups groups={service.techGroups} />
      </SectionShell>

      {service.compare && (
        <SectionShell title={service.compareTitle} intro={service.compareIntro} tone={tone()}>
          <CompareCards columns={service.compare} />
        </SectionShell>
      )}

      <SectionShell title={service.capabilitiesTitle} tone={tone()}>
        <CapabilityList items={service.capabilities} />
      </SectionShell>

      <SectionShell title={service.processTitle} tone={tone()}>
        <ProcessSteps steps={service.process} />
      </SectionShell>

      {(() => { const t = tone(); return (
        <SectionShell title={service.whyTitle} tone={t}>
          <FeatureGrid items={service.why} cardTone={t === 'bg' ? 'surface' : 'bg'} />
        </SectionShell>
      )})()}

    <SectionShell title="Frequently asked questions" tone={tone()} align="center">
  <FaqAccordion faqs={service.faqs} idPrefix={service.slug} />
</SectionShell>

      <ServiceCTA service={service} />
    </main>
  )
}