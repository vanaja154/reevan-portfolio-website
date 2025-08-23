//import Portfolio2Hero from "@/components/portfolio-2/Portfolio2Hero";
import PortfolioGrid from "@/components/portfolio-2/PortfolioGrid";
import PortfolioSection from "@/components/portfolio-2/PortfolioSection";
import HireDevelopersSection from "@/components/portfoliomodern/HireDevelopersSection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <Portfolio2Hero /> */}
      <CustomHero 
        title="Our Creative Work"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        bgImage="/images/portfolio/office.jpg"
      />

      <PortfolioSection />
      <PortfolioGrid />
      <HireDevelopersSection />
    </div>
  );
}
