import AboutCompanySection from '@/components/appdevelopment/AboutCompanySection'
import AppDevBlogSection from '@/components/appdevelopment/AppDevBlogSection'
import AppDevContactSection from '@/components/appdevelopment/AppDevContactSection'
import AppDevCountries from '@/components/appdevelopment/AppDevCountries'
import AppDevelopmentAbout from '@/components/appdevelopment/AppDevelopmentAbout'
import AppDevelopmentHero from '@/components/appdevelopment/AppDevelopmentHero'
import AppDevelopmentServiceSection from '@/components/appdevelopment/AppDevelopmentServiceSection'
import AppDevTestimonials from '@/components/appdevelopment/AppDevTestimonials'
import AppDownloadSection from '@/components/appdevelopment/AppDownloadSection'
import PortfolioCarousel from '@/components/appdevelopment/FinestWorkSection'
import Technologies from '@/components/home/Technologies'
import React from 'react'

export default function AppDevelopment() {
  return (
    <div className="w-full">
        <AppDevelopmentHero />
        <AppDevelopmentAbout />
        <AboutCompanySection/>
        <AppDevelopmentServiceSection/>
        <PortfolioCarousel/>
        <Technologies />
        <AppDevTestimonials />
        <AppDownloadSection />
        <AppDevBlogSection />
        <AppDevContactSection />
        <AppDevCountries />
      
    </div>
  )
}

