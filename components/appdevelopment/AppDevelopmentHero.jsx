"use client";

import CustomButton from "@/utils/CustomButton";
import Image from "next/image";
import { Users, Award, Smartphone } from "lucide-react"; 

export default function AppDevelopmentHero() {
  return (
    <section className="flex mt-10 flex-col md:flex-row justify-between items-center gap-8 p-8 md:p-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Top Mobile App Development Company in India</h2>
        <p className="text-lg mb-8">
          Reevan solves the world's biggest problems with expertise. Reevan helps global brands with digital products on web, mobile, and connected platforms.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          {/* User Engagement */}
          <div className="bg-purple-100 rounded-lg p-4 flex items-center gap-2">
            <Users className="text-purple-500" size={20} />
            <div>
              <p className="text-sm font-semibold">100k User Engagement</p>
            </div>
          </div>

          {/* Featured Apps */}
          <div className="bg-orange-100 rounded-lg p-4 flex items-center gap-2">
            <Award className="text-orange-500" size={20} />
            <div>
              <p className="text-sm font-semibold">100+ Featured App</p>
            </div>
          </div>

          {/* App Published */}
          <div className="bg-yellow-100 rounded-lg p-4 flex items-center gap-2">
            <Smartphone className="text-yellow-500" size={20} />
            <div>
              <p className="text-sm font-semibold">600+ App Published</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action and Testimonial */}
        <div className="flex items-center gap-4">
          <span>
            <CustomButton
              text="Talk to Our Expert"
              href="/contact"
              bgColor="bg-orange-500"
              hoverColor="hover:bg-orange-600"
              borderColor="border-orange-500"
            />
          </span>
          <span className="flex items-center gap-4">
            <Image
              src="/images/user4.jpg"
              alt="Kamlesh Happy"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">Kamlesh Happy</h4>
              <p className="text-gray-500">Business Head</p>
            </div>
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative">
        <Image
          src="/images/app-mockup.png"
          alt="Mobile Apps Showcase"
          width={500}
          height={700}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}