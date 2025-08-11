// components/MarketingCaseStudy.jsx
export default function MarketingCaseStudy() {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            How Binolax Facewash Generated 220% More Digital Marketing Revenue
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Problems</h3>
          <ul className="space-y-6">
            <li className="flex items-start">
                <p className="ml-3 text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi sunt reprehenderit magnam tenetur dolorem incidunt iste.
              </p>
            </li>
            <li className="flex items-start">
              <p className="ml-3 text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </li>
            <li className="flex items-start">
              <p className="ml-3 text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi sunt reprehenderit magnam tenetur dolorem incidunt iste.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
