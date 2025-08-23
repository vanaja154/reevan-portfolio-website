import AppScreens from "@/components/portfoliodetails/AppScreens";
import ClientSolutions from "@/components/portfoliodetails/ClientSolutions";
import PortfolioAboutApp from "@/components/portfoliodetails/PortfolioAboutApp";
import PortfolioDetailsHero from "@/components/portfoliodetails/PortfolioDetailsHero";
import StandardFeatures from "@/components/portfoliodetails/StandardFeatures";
import TypographyPalette from "@/components/portfoliodetails/TypographyPalette";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <PortfolioDetailsHero /> */}
      <CustomHero
        title="Furniture ios app kit developed"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        bgImage="/images/portfolio/office.jpg"
      />
      <PortfolioAboutApp />
      <StandardFeatures />
      <TypographyPalette />
      <AppScreens />
      <ClientSolutions />
    </div>
  );
}
