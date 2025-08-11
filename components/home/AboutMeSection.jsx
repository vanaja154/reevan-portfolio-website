"use client";

import {
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        
        {/* Left - Image */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center">
          <img
            src="/images/freelancer-2.png" 
            alt="About Me"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Right - Content */}
        <div className="lg:w-1/2 w-full lg:pl-12 text-left">
          <p className="text-orange-500 uppercase text-sm mb-2">More About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let Me Know Here
          </h2>
          <p className="text-gray-600 mb-4 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nesciunt
            accusantium eos quam obcaecati corporis veritatis rem ipsam! Sint optio et quos
            modi maiores quaerat itaque non. Ab, officiis alias.
          </p>
          <p className="text-gray-600 mb-4 text-justify">
            Praesentium nesciunt accusantium eos quam obcaecati corporis veritatis rem ipsam!
            Sint optio et quos modi maiores quaerat itaque non. Ab, officiis alias.
          </p>
          <p className="text-gray-600 mb-6 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nesciunt
            accusantium eos quam obcaecati corporis veritatis rem ipsam! Sint optio et quos
            modi maiores quaerat itaque non. Ab, officiis alias.
          </p>

          <div>
            <p className="font-semibold mb-2">Follow Me on Social Media</p>
            <div className="flex space-x-4 text-gray-700 text-xl">
              <a href="#" className="hover:text-orange-500">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <YoutubeIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-orange-500">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
