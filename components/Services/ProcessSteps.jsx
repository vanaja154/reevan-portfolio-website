// components/ProcessSteps.jsx
import Image from 'next/image';

export default function ProcessSteps() {
  const steps = [
    {
      icon: '/images/Services/pencil.svg', // replace with actual image path
      title: 'Requirement Gathering',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/Design.svg',
      title: 'Design',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/prototype.svg',
      title: 'Prototype',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/computer.svg',
      title: 'Development',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/quality-check.svg',
      title: 'Quality Assurance',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/Rocket.svg',
      title: 'Deployment',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
    {
      icon: '/images/Services/customer-support.svg',
      title: 'Support & Maintenance',
      description: 'Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi.',
    },
  ];

  return (
    <section className="bg-[#FFD6C9] py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Development Process We Follow
        </h2>
        <p className="text-gray-600 mb-12">
          Our design process follows a proven approach. We begin with a deep understanding of your needs and create a
          planning template.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              <div className="mb-4">
                <Image src={step.icon} alt={step.title} width={64} height={64} />
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
