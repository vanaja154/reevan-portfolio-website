import AppDevBlogSection from '@/components/appdevelopment/AppDevBlogSection'
import AppDevTestimonials from '@/components/appdevelopment/AppDevTestimonials'
// import ClientTestimonialSection from '@/components/leadgeneration/ClientTestimonialSection'
import CompanyOverviewSection from '@/components/leadgeneration/CompanyOverviewSection'
import CustomerPassionSection from '@/components/leadgeneration/CustomerPassionSection'
import LeadHeroSection from '@/components/leadgeneration/LeadHeroSection'
import ServiceOfferingsSection from '@/components/leadgeneration/ServiceOfferingsSection'
import React from 'react'

export default function page() {
  return (
     <main>
        <LeadHeroSection />
        <CompanyOverviewSection />
        <ServiceOfferingsSection />
        <CustomerPassionSection />
        {/* <ClientTestimonialSection /> */}
        <AppDevTestimonials />
        {/* <BlogSection /> */}
        <AppDevBlogSection />
     </main>
  )
}
