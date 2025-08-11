import AboutCompanySection from '@/components/appdevelopment/AboutCompanySection'
import AppDevBlogSection from '@/components/appdevelopment/AppDevBlogSection'
import AppDevelopmentAbout from '@/components/appdevelopment/AppDevelopmentAbout'
// import AppDevTestimonials from '@/components/appdevelopment/AppDevTestimonials'
import CreativeHeroSection from '@/components/creativeagency/CreativeHeroSection'
import ContactSection from '@/components/home/ContactSection'
import Technologies from '@/components/home/Technologies'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import Works from '@/components/home/Works'
// import CreativeServicesSection from '@/components/creativeagency/CreativeServicesSection'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
      <CreativeHeroSection />
      <AppDevelopmentAbout />
      <AboutCompanySection />
      <Works />
      <Technologies />
      <TestimonialsSection />
      <AppDevBlogSection />
      <ContactSection />
      
    </div>
  )
}
