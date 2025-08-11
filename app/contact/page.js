import ContactSection from '@/components/Contact/ContactSection'
import InquirySection from '@/components/Contact/InquirySection'
import OfficeLocations from '@/components/Contact/OfficeLocations'
import React from 'react'

export default function Contactpage() {
  return (
     <main>
       <ContactSection />
       <InquirySection />
       <OfficeLocations />
     </main>
  )
}
