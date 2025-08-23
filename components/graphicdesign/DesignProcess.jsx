import DevelopmentProcess from '@/utils/DevelopmentProcess';
import Image from 'next/image';

const processSteps = [
  {
    title: "Requirement Gathering",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/pencil.svg",
  },
  {
    title: "Design",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/design.svg",
  },
  {
    title: "Prototype",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/prototype.svg",
  },
  {
    title: "Development",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/computer.svg",
  },
  {
    title: "Quality Assurance",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/quqlity-check.svg",
  },
  {
    title: "Deployment",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/rocket.svg",
  },
  {
    title: "Support & Maintenance",
    description: "Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.",
    icon: "/images/casestudydetails/customer-support.svg",
  },
];


export default function DesignProcess() {
  return (
    <section className="py-16 bg-white text-center">
       <div>
      <DevelopmentProcess
        heading="Graphic Design Process We Follow"
        subHeading="Our design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template."
        steps={processSteps}
      />
    </div>
    </section>
  );
}
