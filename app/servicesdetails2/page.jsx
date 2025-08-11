import ContactSection from '@/components/Pricing/ContactSection'
import IndustriesWeServe from '@/components/Services/IndustriesWeServe'
import ProcessSteps from '@/components/Services/ProcessSteps'
import HireDevelopersSection from '@/components/Servicesdetails/HireDevelopersSection'
import KeyExpertise from '@/components/Servicesdetails/KeyExpertise'
import ServiceSection from '@/components/Servicesdetails/ServiceSection'
import WebsiteHero from '@/components/Servicesdetails/WebsiteHero'
import HeroSection from '@/components/Servicesdetails2/HeroSection'
import React from 'react'

export default function Servicesdetails2page() {
  return (
     <main>
     <HeroSection />
     <WebsiteHero />
     <ServiceSection />
     <KeyExpertise />
     <HireDevelopersSection />
     <ProcessSteps />
     <IndustriesWeServe />
     <ContactSection />
     </main>
  )
}
