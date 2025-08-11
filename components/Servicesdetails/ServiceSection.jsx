// components/ServiceSection.jsx
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 min-h-[500px]">
        
        {/* Left Side - Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            We offer <span className="text-black">Web & App</span> development service
          </h2>
          <p className="text-gray-600 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt reprehenderit
            magnam tenetur dolorem incidunt iste natus molestias harum inventore, fuga, corporis
            facere assumenda voluptate debitis? Aperiam nemo incidunt aliquam
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-gray-800 text-xl">🔄</span>
              <span className="text-gray-800">Unique website design with 6 months support</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-800 text-xl">⏱️</span>
              <span className="text-gray-800">Enjoy express delivery within deadline.</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-800 text-xl">👥</span>
              <span className="text-gray-800">Join more than 3500 very happy customers</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/images/Servicesdetails/teamwork.svg" // Place your image in /public
            alt="Service Illustration"
            width={600}
            height={400}
            className="w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
