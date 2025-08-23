import Career from "@/components/Ourcore/Career";
import CompanyValues from "@/components/Ourcore/CompanyValues";
import Herosection from "@/components/Ourcore/Herosection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function Ourcorepage() {
  return (
    <main>
      {/* <Herosection /> */}
      <CustomHero
        title="Our Core Values"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.reevan office"
        bgImage="/images/portfolio/office.jpg"
      />
      <CompanyValues />
      <Career />
    </main>
  );
}
