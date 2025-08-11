// components/ProjectChallenges.jsx
import Image from "next/image";
export default function ProjectChallenges() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Our Project Challenges
        </h2>
        <p className="text-gray-600 max-w-4xl mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Challenge 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg">
                1
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Research your competitors sales tactics and results.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg">
                2
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Facebook Advertising campaigns to facilitate conversions, not just likes.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg">
                3
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
               PPC campaigns reach click-happy customers with products.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Challenge 4 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-lg">
                4
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Comprehensive competitor analysis to uncover key opportunities.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden rounded-xl">
         <Image
           src="/images/casestudydetails/face.jpg"
           alt="Challenges"
           width={800} 
           height={500} 
      />
        </div>
      </div>
    </section>
  );
}
