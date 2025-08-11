// components/OpportunitySection.jsx
import Image from "next/image";
export default function OpportunitySection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl lg:mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        
        {/* Left Side - Text */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10M4 7l8 5 8-5M20 7v10M4 17l8-5 8 5"
              />
            </svg>
            <span className="text-orange-500 font-medium tracking-wide">
              CAREER
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            Opportunities don't happen,{" "}
            <span className="text-gray-900">you create them.</span>
          </h2>

          <p className="text-gray-600 mb-6">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>

          <button className="flex items-center gap-2 text-gray-800 font-medium hover:gap-3 transition-all duration-300">
            Join Our Team <span>→</span>
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/interview.jpg"
            alt="Interview discussion"
            width={550}
            height={380}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
