import CustomButton from "@/utils/CustomButton";

export default function ClientSolutions() {
  return (
    <section className="w-full bg-[#FFF8F6] px-6 py-12 md:px-16">
      {/* Content container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Client's Need */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Client&apos;s Need
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        {/* Our Solutions */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <CustomButton
          title="← Previous Project"
          containerStyles="px-6 py-3 border border-orange-400 rounded-full text-orange-500 hover:bg-orange-50 transition"
          textStyles="font-medium"
          href="/previous-project"
        />
        <CustomButton
          title="Next Project →"
          containerStyles="px-6 py-3 border border-orange-400 rounded-full text-orange-500 hover:bg-orange-50 transition"
          textStyles="font-medium"
          href="/next-project"
        />
      </div>
    </section>
  );
}
