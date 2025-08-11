import AboutSection from '@/components/About/AboutSection'
import AwardsSection from '@/components/About/AwardsSection'
import Career from '@/components/About/Career'
import OurMission from '@/components/About/OurMission'
import Transparency from '@/components/About/Transparency'
import WhoWeAreSection from '@/components/About/WhoWeAreSection'
import React from 'react'

export default function Leadpage() {
  return (
     <main>
        <WhoWeAreSection />
        <AboutSection />
        <AwardsSection />
        <OurMission />
        <Transparency />
        <Career />
     </main>
  )
}
