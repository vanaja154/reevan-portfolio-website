import AboutSection from '@/components/Casestudydetails/AboutSection'
import CardsDetails from '@/components/Casestudydetails/CardsDetails'
import Cards from '@/components/Casestudydetails/CardsDetails'
import Development from '@/components/Casestudydetails/Development'
import Herosection from '@/components/Casestudydetails/Herosection'
import MarketingCaseStudy from '@/components/Casestudydetails/MarketingCaseStudy'
import ProjectChallenges from '@/components/Casestudydetails/ProjectChallenges'
import Result from '@/components/Casestudydetails/Result'
import StatsSection from '@/components/Casestudydetails/StatsSection'
import React from 'react'

export default function Casestudydetailspage() {
  return (
     <main>
        <Herosection />
        <AboutSection />
        <MarketingCaseStudy /> 
        <Development />
        <ProjectChallenges />
        <StatsSection />
        <Result />
        {/* <Cards /> */}
        <CardsDetails/>
        
     </main>
  )
}
