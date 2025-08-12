import AppScreens from "@/components/portfoliodetails/AppScreens";
import ClientSolutions from "@/components/portfoliodetails/ClientSolutions";
import PortfolioAboutApp from "@/components/portfoliodetails/PortfolioAboutApp";
import PortfolioDetailsHero from "@/components/portfoliodetails/PortfolioDetailsHero";
import StandardFeatures from "@/components/portfoliodetails/StandardFeatures";
import TypographyPalette from "@/components/portfoliodetails/TypographyPalette";
import React from "react";

export default function page() {
  return (
    <div>
      <PortfolioDetailsHero />
      <PortfolioAboutApp />
      <StandardFeatures />
      <TypographyPalette />
      <AppScreens />
      <ClientSolutions />
    </div>
  );
}
