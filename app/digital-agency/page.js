import AppDevBlogSection from '@/components/appdevelopment/AppDevBlogSection'
import AppDevTestimonials from '@/components/appdevelopment/AppDevTestimonials'
// import BlogSection from '@/components/digitalagency/BlogSection'
// import ClientReviews from '@/components/digitalagency/ClientReviews'
import Companies from '@/components/digitalagency/Companies'
import DigitHeroSection from '@/components/digitalagency/DigitHeroSection'
import ExpertiseSection from '@/components/digitalagency/ExpertiseSection'
import FooterCTA from '@/components/digitalagency/FooterCTA'
import SelectedWork from '@/components/digitalagency/SelectedWork'
import Services from '@/components/digitalagency/Services'
import React from 'react'

export default function page() {
  return (
    <main>
      <DigitHeroSection/>
      <Companies />
      <Services />
      <SelectedWork />
      <ExpertiseSection />
      {/* <ClientReviews /> */}
      <AppDevTestimonials />
      {/* <BlogSection /> */}
      <AppDevBlogSection />
      <FooterCTA />
    
      {/* other sections */}
    </main>
  )
}
