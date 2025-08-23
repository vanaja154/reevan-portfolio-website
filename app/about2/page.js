import AboutSection from "@/components/About/AboutSection";
import AwardsSection from "@/components/About/AwardsSection";
import Career from "@/components/About/Career";
import OurMission from "@/components/About/OurMission";
import Transparency from "@/components/About/Transparency";
import WhoWeAreSection from "@/components/About/WhoWeAreSection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHero
        title="About Us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.Who We"
        bgImage="/images/portfolio/office.jpg"
      />
      <WhoWeAreSection />
      <AboutSection />
      <AwardsSection />
      <OurMission />
      <Transparency />
      <Career />
    </div>
  );
}
