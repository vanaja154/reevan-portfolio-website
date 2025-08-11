import React from "react";
import { Apple, Play } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <div className="bg-[#FFF] w-full px-6 py-12 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h3 className="text-[#ff5b2e] text-sm font-semibold mb-2">Download Our App</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-4 leading-snug">
            Download our application from App Store
          </h2>
          <p className="text-gray-600 mb-6">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
          </p>

          {/* Static Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#ff5b2e] text-white px-5 py-3 rounded-4xl hover:opacity-90 transition">
              <Apple size={20} />
              <span className="text-sm font-medium">App Store</span>
            </button>

            <button className="flex items-center gap-2 bg-[#ff5b2e] text-white px-5 py-3 rounded-4xl hover:opacity-90 transition">
              <Play size={20} />
              <span className="text-sm font-medium">Play Store</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src="/images/app-ui.png"
            alt="App Preview"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
