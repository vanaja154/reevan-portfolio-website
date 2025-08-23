import ContactSection from "@/components/Pricing/ContactSection";
import IndustriesWeServe from "@/components/Services/IndustriesWeServe";
import ProcessSteps from "@/components/Services/ProcessSteps";
import HireDevelopersSection from "@/components/Servicesdetails/HireDevelopersSection";
import KeyExpertise from "@/components/Servicesdetails/KeyExpertise";
import ServiceSection from "@/components/Servicesdetails/ServiceSection";
import WebsiteHero from "@/components/Servicesdetails/WebsiteHero";
import HeroSection from "@/components/Servicesdetails2/HeroSection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function Servicesdetails2page() {
  return (
    <main>
      {/* <HeroSection /> */}
      <CustomHero
        title="Mobile App Development Company in India, UK"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        bgImage="/images/portfolio/office.jpg"
      />
      <WebsiteHero />
      <ServiceSection />
      <KeyExpertise />
      <HireDevelopersSection />
      <ProcessSteps />
      <IndustriesWeServe />
      <ContactSection />
    </main>
  );
}
