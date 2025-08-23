import ContactSection from "@/components/Pricing/ContactSection";
import PricingSection from "@/components/Pricing/PricingSection";
import PricingTableSection from "@/components/Pricing/PricingTableSection";
import HeroSection from "@/components/Pricing2/HeroSection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function Pricing2page() {
  return (
    <main>
      {/* <HeroSection /> */}
      <CustomHero
        title="Our Pricing"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        bgImage="/images/portfolio/office.jpg"
      />
      <PricingSection />
      <PricingTableSection />
      <ContactSection />
    </main>
  );
}
