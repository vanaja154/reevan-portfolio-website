import Portfolio2Hero from '@/components/portfolio-2/Portfolio2Hero'
import PortfolioGrid from '@/components/portfolio-2/PortfolioGrid'
import PortfolioSection from '@/components/portfolio-2/PortfolioSection'
import HireDevelopersSection from '@/components/portfoliomodern/HireDevelopersSection'
import React from 'react'

export default function page() {
  return (
    <div>
      <Portfolio2Hero />
      <PortfolioSection />
      <PortfolioGrid />
      <HireDevelopersSection />
    </div>
  )
}
