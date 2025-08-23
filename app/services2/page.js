import Development from '@/components/Casestudydetails/Development'
import ContactSection from '@/components/Pricing/ContactSection'
import CreativeDesignService from '@/components/Services/CreativeDesignService'
import DevelopmentService from '@/components/Services/DevelopmentService'
import IndustriesWeServe from '@/components/Services/IndustriesWeServe'
import MarketingService from '@/components/Services/MarketingService'
import OurServicesSection from '@/components/Services/OurServicesSection'
import ProcessSteps from '@/components/Services/ProcessSteps'
import HeroSection from '@/components/Services2/HeroSection'
import CustomHero from '@/utils/CustomHero'
import React from 'react'

export default function Services2page() {
  return (
     <main>
     {/* <HeroSection /> */}
     <CustomHero
                  title="Our Services"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
                  bgImage="/images/portfolio/office.jpg"
                />
     <OurServicesSection />
     <CreativeDesignService />
     <DevelopmentService />
     <MarketingService />
      {/* <Development /> */}
       <Development />
     <IndustriesWeServe />
     <ContactSection />
     </main>
  )
}
