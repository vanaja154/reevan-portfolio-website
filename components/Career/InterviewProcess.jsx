// components/InterviewProcess.jsx
import Image from "next/image";

export default function InterviewProcess() {
  return (
    <section className="bg-[#FFD9CC] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
         Process of Interview
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Follow these simple steps to begin your journey with us. We value
          talent, dedication, and the drive to create something amazing.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center relative overflow-hidden">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/application-review.png"
                alt="Application Review"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Application Review</h3>
            <p className="text-gray-600">
              Our hiring team carefully reviews your resume and portfolio to
              understand your skills and experience.
            </p>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center relative overflow-hidden">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/technical-discussion.png"
                alt="Technical Discussion"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Technical Discussion</h3>
            <p className="text-gray-600">
              A conversation with our experts to explore your technical
              expertise, problem-solving approach, and innovative thinking.
            </p>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center relative overflow-hidden">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/final-meeting.png"
                alt="Final Meeting"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Final Meeting</h3>
            <p className="text-gray-600">
              Meet with our leadership team to ensure mutual alignment before we
              officially welcome you on board.
            </p>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
