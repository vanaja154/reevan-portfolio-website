"use client";
import Image from "next/image";

export default function EmployeeeSpeak() {
  return (
    <section className="relative bg-gray-50 py-16 px-4 flex justify-center items-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Employee <span className="text-pink-500">Speaks</span> 
        </h2>
        <p className="text-xl font-semibold mb-4">
          "Reevan build my startup business a great website that really helps
          current and potential customers get a good feel for my company."
        </p>
        <p className="text-gray-600 mb-6">
          I am delighted with our new website. A1 service and design by Reevan.
          You can go with the Web Design Company, and I 100% recommend them to
          anyone. The perfect company to go to for your ideal website and
          digital marketing.
        </p>
        <div className="font-bold text-lg">Anne Fibbiyon</div>
        <div className="text-gray-500 mb-8">Jaipur, Rajasthan</div>

        {/* Profile images */}
        <div className="flex justify-center space-x-4 mt-6">
          <Image
            src="/images/client1.jpg"
            alt="Client 1"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <Image
            src="/images/client2.jpg"
            alt="Client 2"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <Image
            src="/images/client3.jpg"
            alt="Client 3"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <Image
            src="/images/client4.jpg"
            alt="Client 4"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <Image
            src="/images/client5.jpg"
            alt="Client 5"
            width={60}
            height={60}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
