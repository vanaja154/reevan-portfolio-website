import CreativeWorkSection from '@/components/portfoliomodern/CreativeWorkSection'
import FourthSection from '@/components/portfoliomodern/FourthSection'
import FurnitureAppSection from '@/components/portfoliomodern/FurnitureAppSection'
import HireDevelopersSection from '@/components/portfoliomodern/HireDevelopersSection'
import MultiVendor from '@/components/portfoliomodern/MultiVendor'
import PortfolioHero from '@/components/portfoliomodern/PortfolioHero'
import React from 'react'

export default function page() {
  return (
    <div>
      <PortfolioHero />
      <CreativeWorkSection />
      <FurnitureAppSection />
      <FourthSection />
      <MultiVendor />
      <HireDevelopersSection />
    </div>
  )
}
