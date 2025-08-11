// components/BenefitsSection.jsx
import Image from "next/image";

const benefits = [
  {
    icon: "/icons/work-life-balance.png",
    title: "Work-Life Balance",
    description:
      "Enjoy flexible schedules that help you maintain a healthy balance between your career and personal life.",
  },
  {
    icon: "/icons/health-support.png",
    title: "Comprehensive Health Support",
    description:
      "We offer extensive medical coverage to keep you and your family healthy and stress-free.",
  },
  {
    icon: "/icons/learning-sessions.png",
    title: "Skill Development Sessions",
    description:
      "Attend regular workshops designed to boost your skills and keep you ahead in your field.",
  },
  {
    icon: "/icons/tech-tools.png",
    title: "Modern Tech Tools",
    description:
      "Get the latest devices and software you need to do your best work without limitations.",
  },
  {
    icon: "/icons/resources.png",
    title: "Access to Premium Resources",
    description:
      "We provide paid subscriptions to top learning platforms, books, and online courses.",
  },
  {
    icon: "/icons/office-setup.png",
    title: "Ergonomic Work Environment",
    description:
      "Enjoy a comfortable, well-designed workspace with world-class infrastructure.",
  },
  {
    icon: "/icons/networking.png",
    title: "Industry Networking",
    description:
      "Join meetups and events where you can connect with professionals from various industries.",
  },
  {
    icon: "/icons/guidance.png",
    title: "Expert Mentorship",
    description:
      "Receive guidance from experienced mentors to accelerate your career growth.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          We are hiring heroes! Time to value your skills.
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Lipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
