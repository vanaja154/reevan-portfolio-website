"use client";

import { useState } from "react";
import { FaRocket, FaEye, FaHandshake, FaPeace } from "react-icons/fa";

export default function OurMission() {
  const [active, setActive] = useState("mission");

  const tabs = [
    {
      id: "mission",
      icon: <FaRocket className="text-orange-500 text-xl" />,
      title: "Our Mission",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
    },
    {
      id: "vision",
      icon: <FaEye className="text-orange-500 text-xl" />,
      title: "Our Vision",
      content: `This is our vision content.`
    },
    {
      id: "commitment",
      icon: <FaHandshake className="text-orange-500 text-xl" />,
      title: "Our Commitment",
      content: `This is our commitment content.`
    },
    {
      id: "values",
      icon: <FaPeace className="text-orange-500 text-xl" />,
      title: "Core Values",
      content: `This is our core values content.`
    }
  ];

  return (
    <div className="bg-[#fdf4f3] py-12">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">

        {/* Left side - Tabs */}
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 
                ${active === tab.id ? "bg-orange-100" : "bg-white"}`}
              style={{ boxShadow: active === tab.id ? "none" : "0 3px 6px rgba(0,0,0,0.05)" }}
            >
              <div className="bg-white shadow-md rounded-full p-2 flex items-center justify-center">
                {tab.icon}
              </div>
              <span
                className={`font-medium text-base ${
                  active === tab.id ? "text-orange-500" : "text-gray-800"
                }`}
              >
                {tab.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-2/4 flex flex-col justify-center">
          {tabs.map(
            (tab) =>
              active === tab.id && (
                <div key={tab.id}>
                  <h2 className="text-3xl font-bold mb-4">{tab.title}</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {tab.content}
                  </p>
                </div>
              )
          )}
        </div>

      </div>
    </div>
  );
}
