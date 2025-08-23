import Image from "next/image";

export default function CompanyCulture() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Life at Reevan
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          At Innovexa, we believe that work should be as exciting as it is
          rewarding. Our team thrives in a culture of creativity, collaboration,
          and celebration. From brainstorming sessions to festive gatherings,
          we make every moment count while shaping the future together.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:ml-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Team fun at the office"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Office celebration"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Brainstorming session"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Friendly coworkers"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Office workspace"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 7 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Holiday party"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 8 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Team lunch"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 9 */}
          <div className="rounded-lg overflow-hidden group">
            <Image
              src="/images/office-inner1.jpg"
              alt="Year-end celebration"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
