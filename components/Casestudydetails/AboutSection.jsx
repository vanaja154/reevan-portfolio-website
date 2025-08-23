// components/AboutSection.jsx
import Image from "next/image";
import AppScreens from "../portfoliodetails/AppScreens";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Binolax Facewash
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/casestudydetails/facewash.jpg" // replace with your image path
              alt="Perfume bottles"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Phones Section */}
        {/* <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <Image
            src="/images/casestudydetails/phone1.png" // replace with your phone image path
            alt="Phone screen"
            width={200}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/images/casestudydetails/phone 2.png"
            alt="Phone screen"
            width={200}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/images/casestudydetails/phone3.png"
            alt="Phone screen"
            width={200}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/images/casestudydetails/phone1.png"
            alt="Phone screen"
            width={200}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/images/casestudydetails/phone3.png"
            alt="Phone screen"
            width={200}
            height={400}
            className="rounded-lg"
          />
        </div> */}
        <AppScreens />
      </div>
    </section>
  );
}
