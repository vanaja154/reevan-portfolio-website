import ContactSection from '@/components/Pricing/ContactSection'
import CreativeDesignService from '@/components/Services/CreativeDesignService'
import DevelopmentService from '@/components/Services/DevelopmentService'
import IndustriesWeServe from '@/components/Services/IndustriesWeServe'
import MarketingService from '@/components/Services/MarketingService'
import OurServicesSection from '@/components/Services/OurServicesSection'
import ProcessSteps from '@/components/Services/ProcessSteps'
import HeroSection from '@/components/Services2/HeroSection'
import React from 'react'

export default function Services2page() {
  return (
     <main>
     <HeroSection />
     <OurServicesSection />
     <CreativeDesignService />
     <DevelopmentService />
     <MarketingService />
     <ProcessSteps />
     <IndustriesWeServe />
     <ContactSection />
     </main>
  )
}
