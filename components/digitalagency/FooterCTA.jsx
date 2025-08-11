'use client';

import Image from 'next/image';

export default function FooterCTA() {
  return (
    <footer className="bg-[#FF6D42] pt-24 pb-12">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white rounded-xl shadow-xl px-6 py-10 -mt-32">
          {/* Card 1 */}
          <div className="flex items-center gap-4 max-w-sm">
            <Image
              src="/images/Design/project.png"
              alt="Get Free Quote"
              width={80}
              height={80}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Want to kick start your project right now? Talk to Experts.
              </h3>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-[#151438] font-medium hover:underline"
              >
                Get Free Quote →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 max-w-sm">
            <Image
              src="/images/Design/mobile.png"
              alt="Request Call Back"
              width={80}
              height={80}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                What you are looking for ? Website, Mobile App or Digital Marketing?
              </h3>
              <a
                href="#"
                className="mt-2 inline-block text-sm text-[#151438] font-medium hover:underline"
              >
                Request Call Back →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-sm">
        <div>
          <p className="text-white/80 mb-1">Email ID</p>
          <p className="font-bold">reevan@abcd.com</p>
        </div>
        <div>
          <p className="text-white/80 mb-1">Mobile Number</p>
          <p className="font-bold">+91 123 456 7890</p>
        </div>
        <div>
          <p className="text-white/80 mb-1">WhatsApp</p>
          <p className="font-bold">+91 123 456 7890</p>
        </div>
        <div>
          <p className="text-white/80 mb-1">Subscribe to Newsletter</p>
          <div className="flex items-center border-b border-white/70 pb-1">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none placeholder-white/70 text-white flex-1 text-sm"
            />
            <button className="ml-2 text-xl text-white">→</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
