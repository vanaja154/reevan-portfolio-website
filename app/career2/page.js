import AppDevTestimonials from "@/components/appdevelopment/AppDevTestimonials";
import BenefitsSection from "@/components/Career/BenefitsSection";
import CompanyCulture from "@/components/Career/CompanyCulture";
import InterviewProcess from "@/components/Career/InterviewProcess";
import JobListings from "@/components/Career/JobListings";
import OpportunitySection from "@/components/Career/OpportunitySection";
import CustomHero from "@/utils/CustomHero";
import React from "react";

export default function page() {
  return (
    <div>
      <main>
        <CustomHero
          title="Join The Team"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
          bgImage="/images/portfolio/office.jpg"
        />
        <OpportunitySection />
        <BenefitsSection />
        <CompanyCulture />
        <InterviewProcess />
        {/* <EmployeeeSpeak /> */}
        <AppDevTestimonials />
        <JobListings />
      </main>
    </div>
  );
}
