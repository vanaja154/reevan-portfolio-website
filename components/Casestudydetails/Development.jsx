import Image from 'next/image';

const processSteps = [
  {
    title: 'Requirement Gathering',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/pencil.svg',
  },
  {
    title: 'Design',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/design.svg',
  },
  {
    title: 'Prototype',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/prototype.svg',
  },
  {
    title: 'Development',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/computer.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/quqlity-check.svg',
  },
  {
    title: 'Deployment',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/rocket.svg',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/casestudydetails/customer-support.svg',
  },
];

export default function Development() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Development Process We Follow
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our design process follows a proven approach. We begin with a deep
          understanding of your needs and create a planning template.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              tabIndex={0} // ✅ makes div focusable for mobile tap
              className="bg-white shadow-md rounded-lg p-6 w-full sm:w-72 text-left relative group overflow-hidden cursor-pointer focus:outline-none"
            >
              {/* Icon + Step Number */}
              <div className="flex justify-between items-center mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={40}
                  height={40}
                />
                <span
                  className="text-4xl font-extrabold text-gray-400 opacity-0 translate-y-2 
                  transition-all duration-500 
                  group-hover:opacity-100 group-hover:translate-y-0 
                  group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 
                  group-hover:text-transparent group-hover:bg-clip-text 
                  group-focus:opacity-100 group-focus:translate-y-0 
                  group-focus:bg-gradient-to-r group-focus:from-yellow-400 group-focus:to-orange-500 
                  group-focus:text-transparent group-focus:bg-clip-text"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>

              {/* Bottom Line Gradient Animation */}
              <span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 
                transform scale-x-0 origin-left transition-transform duration-500 
                group-hover:scale-x-100 group-focus:scale-x-100"
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
