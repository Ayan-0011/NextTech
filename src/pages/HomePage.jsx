import Hero from '../sections/home/Hero'
import TechStrip from '../sections/home/TechStrip'
import ServicesSection from '../sections/home/ServicesSection'
import TechnologySection from '../sections/home/TechnologySection'
import FinalCTA from '../sections/home/FinalCTA'
import WhatWeBuild  from '../sections/home/Index'
import ProcessTabs from '../sections/home/Processtabs'
import Testimonials from '../sections/home/Testimonials'
import FAQ from '../sections/home/FAQ'
import AboutPreview from '../sections/home/AboutPreview'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechStrip />
      <WhatWeBuild/>
      {/* <ServicesSection /> */}
      {/* <FeaturedWork /> */}
      {/* <WhyUs /> */}
      {/* <ProcessSection /> */}
      {/* <Card/> */}
      <ProcessTabs/>
      <TechnologySection />
      <Testimonials/>
      <FinalCTA />
      <AboutPreview/>
      <FAQ/>
    </main>
  )
}
