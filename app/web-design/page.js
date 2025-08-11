import AppDevBlogSection from '@/components/appdevelopment/AppDevBlogSection'
import AppDevContactSection from '@/components/appdevelopment/AppDevContactSection'
import AppDevelopmentServiceSection from '@/components/appdevelopment/AppDevelopmentServiceSection'
import FinestWorkSection from '@/components/appdevelopment/FinestWorkSection'
import SelectedWork from '@/components/digitalagency/SelectedWork'
import PartnersSection from '@/components/home/PartnersSection'
import Technologies from '@/components/home/Technologies'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WebAboutSection from '@/components/webdesign/WebAboutSection'
import WebHeroSection from '@/components/webdesign/WebHeroSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <WebHeroSection />
      <WebAboutSection />
      <AppDevelopmentServiceSection />
      <SelectedWork />
      <Technologies />
      <TestimonialsSection />
      <PartnersSection />
      <AppDevBlogSection />
      <AppDevContactSection />
    </div>
  )
}
