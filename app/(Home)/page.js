
import AboutMeSection from "@/components/home/AboutMeSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import Service from "@/components/home/Service";
import Technologies from "@/components/home/Technologies";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Works from "@/components/home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Service />
      <Works />
      <Technologies />
      <TestimonialsSection />
      <PartnersSection />
      <AboutMeSection />
      <ContactSection />
    
    </div>
  );
}
