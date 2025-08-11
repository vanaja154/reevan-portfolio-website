// components/TeamSection.jsx
"use client";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Aarav Kapoor",
      role: "Web Developer",
      image: "/team1.jpg", // Replace with actual image path
      bg: "bg-pink-200",
    },
    {
      name: "Rohan Mehta",
      role: "Graphic Designer",
      image: "/team2.jpg",
      bg: "bg-gray-200",
    },
    {
      name: "Ishita Sharma",
      role: "Android Developer",
      image: "/team3.jpg",
      bg: "bg-gray-200",
    },
    {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-pink-200",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-orange-400",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-sky-400",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-yellow-300",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-gray-300",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-gray-300",
    },
     {
      name: "Priya Nair",
      role: "iOS Developer",
      image: "/team4.jpg",
      bg: "bg-gray-300",
    },
  ];

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Meet the <span className="relative">
            Team
            <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-200 -z-10"></span>
          </span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white"
            >
              <div className={`${member.bg} p-2`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
