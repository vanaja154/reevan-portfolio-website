import OurTeamSection from "@/components/Ourteam/OurTeamSection";
import TeamSection from "@/components/Ourteam/TeamSection";
import OurTeam from "@/components/Ourteam2/OurTeam";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function Ourteam2page() {
  return (
    <main>
      {/* <OurTeam /> */}
      <CustomHero
        title="Our Team"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        bgImage="/images/portfolio/office.jpg"
      />
      <OurTeamSection />
      <TeamSection />
    </main>
  );
}
