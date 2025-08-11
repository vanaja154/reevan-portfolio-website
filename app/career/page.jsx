import AppDevTestimonials from '@/components/appdevelopment/AppDevTestimonials'
import BenefitsSection from '@/components/Career/BenefitsSection'
import CompanyCulture from '@/components/Career/CompanyCulture'
import EmployeeeSpeak from '@/components/Career/EmployeeSpeak'
import InterviewProcess from '@/components/Career/InterviewProcess'
import JobListings from '@/components/Career/JobListings'
import OpportunitySection from '@/components/Career/OpportunitySection'
import React from 'react'

export default function Careerpage() {
  return (
     <main>
       <OpportunitySection />
       <BenefitsSection />
       <CompanyCulture />
       <InterviewProcess />
       {/* <EmployeeeSpeak /> */}
       <AppDevTestimonials />
       <JobListings />
     </main>
  )
}
