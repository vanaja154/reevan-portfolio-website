// components/JobListings.jsx
import { FiArrowRight } from "react-icons/fi";

export default function JobListings() {
  const jobs = [
    {
      title: "Frontend Engineer",
      experience: "2 to 4 years",
      positions: "3",
      location: "Bangalore, India",
      type: "Remote",
      posted: "2 days ago",
    },
    {
      title: "UI/UX Designer",
      experience: "1 to 3 years",
      positions: "2",
      location: "Mumbai, India",
      type: "Full Time",
      posted: "3 days ago",
    },
    {
      title: "Data Analyst",
      experience: "3 to 6 years",
      positions: "1",
      location: "Hyderabad, India",
      type: "Full Time",
      posted: "5 days ago",
    },
    {
      title: "Mobile App Developer",
      experience: "2 to 5 years",
      positions: "2",
      location: "Chennai, India",
      type: "Full Time",
      posted: "6 days ago",
    },
    {
      title: "Backend Developer",
      experience: "3 to 6 years",
      positions: "2",
      location: "Pune, India",
      type: "Full Time",
      posted: "1 week ago",
    },
  ];

  return (
    <section className="bg-[#FEF3F0] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900">
          We're Hiring!
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-2 mb-12">
          Join our team and be a part of building something extraordinary. Check out our latest openings below.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-orange-500 mb-4">
                  {job.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Required Experience</span>
                    <span className="font-semibold">{job.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Position</span>
                    <span className="font-semibold">{job.positions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Job Location</span>
                    <span className="font-semibold">{job.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Job Type</span>
                    <span className="font-semibold">{job.type}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-500">{job.posted}</span>
                <button className="flex items-center gap-1 border border-orange-500 text-orange-500 rounded-full px-4 py-1 text-sm hover:bg-orange-500 hover:text-white transition">
                  Apply Now <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
