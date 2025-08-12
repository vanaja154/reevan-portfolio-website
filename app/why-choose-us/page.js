import Career from '@/components/Ourcore/Career'
import AgencyIntroSection from '@/components/Whychooseus/AgencyIntroSection'
import HeroSection from '@/components/Whychooseus/HeroSection'
import HonorsAwards from '@/components/Whychooseus/HonorsAwards'
import ServiceExpertise from '@/components/Whychooseus/ServiceExpertise'
import React from 'react'

export default function Whychooseuspage() {
  return (
     <main>
     <HeroSection />
     <AgencyIntroSection />
     <ServiceExpertise />
     <HonorsAwards />
     <Career />
     </main>
  )
}
