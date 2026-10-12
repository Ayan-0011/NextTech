import Hero from '../sections/home/Hero'
import TechStrip from '../sections/home/TechStrip'
import ServicesSection from '../sections/home/ServicesSection'
import WhyUs from '../sections/home/WhyUs'
import TechnologySection from '../sections/home/TechnologySection'
import FinalCTA from '../sections/home/FinalCTA'
import WhatWeBuild  from '../sections/home/Index'
import ProcessTabs from '../sections/home/Processtabs'
import Testimonials from '../sections/home/Testimonials'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStrip />
      <WhatWeBuild/>
      {/* <ServicesSection /> */}
      {/* <FeaturedWork /> */}
      <WhyUs />
      {/* <ProcessSection /> */}
      {/* <Card/> */}
      <ProcessTabs/>
      <TechnologySection />
      <Testimonials/>
      <FinalCTA />
    </main>
  )
}
