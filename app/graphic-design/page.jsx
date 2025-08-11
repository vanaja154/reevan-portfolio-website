import BrandPackages from '@/components/graphicdesign/BrandPackages'
import ContactForm from '@/components/graphicdesign/ContactSupport'
// import CreativeSection from '@/components/graphicdesign/CreativeSection'
import DesignProcess from '@/components/graphicdesign/DesignProcess'
import GraphicHeroSection from '@/components/graphicdesign/GraphicHeroSection'
// import PortfolioShowcase from '@/components/graphicdesign/PortfolioShowcase'
import ServiceShowcase from '@/components/graphicdesign/ServiceShowcase'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Works from '@/components/home/Works'
import React from 'react'

export default function page() {
  return (
    <main>
      <GraphicHeroSection />
      <BrandPackages />
      {/* <CreativeSection /> */}
      <TestimonialsSection />
      <ServiceShowcase />
      {/* <PortfolioShowcase /> */}
      <Works />
      <DesignProcess />
      <ContactForm />
    </main>
  )
}
