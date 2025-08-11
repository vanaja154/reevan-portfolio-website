import ContactSection from '@/components/Pricing/ContactSection'
import IndustriesWeServe from '@/components/Services/IndustriesWeServe'
import ProcessSteps from '@/components/Services/ProcessSteps'
import HireDevelopersSection from '@/components/Servicesdetails/HireDevelopersSection'
import KeyExpertise from '@/components/Servicesdetails/KeyExpertise'
import ServiceSection from '@/components/Servicesdetails/ServiceSection'
import WebsiteHero from '@/components/Servicesdetails/WebsiteHero'
import React from 'react'

export default function Servicesdetailspage() {
  return (
     <main>
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
