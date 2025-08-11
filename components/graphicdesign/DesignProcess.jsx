import Image from 'next/image';

const processSteps = [
  {
    title: 'Requirement Gathering',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/images/creative-work-1.jpg',
  },
  {
    title: 'Design',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/design.png',
  },
  {
    title: 'Prototype',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/prototype.png',
  },
  {
    title: 'Development',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/development.png',
  },
  {
    title: 'Quality Assurance',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/quality.png',
  },
  {
    title: 'Deployment',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/deployment.png',
  },
  {
    title: 'Support & Maintenance',
    description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    icon: '/icons/support.png',
  },
];

export default function DesignProcess() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Graphic Design Process We Follow
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-full sm:w-72 text-left"
            >
              <div className="mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
