import React from 'react'
// import BadgesSection from './BadgesSection'

export default function AppDevelopmentAbout() {
  return (
    <section className="py-16 bg-[#fbf1ef] text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold text-orange-500 mb-4">WE ARE REEVAN</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          <span className="relative inline-block">
            <span className="relative z-10">Award</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#ffc5b2] z-0 rounded-sm"></span>
          </span>{" "}
          Winning App Development Company
          #1
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          #1 Mobile App Company, Awarded for its Top Features/Editor Apps Delivered.
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Reevan started its operation in the year 1999. We are a Worldwide-based Web, App, and Digital Marketing Company. Our main domains include Web Design, App Development, Digital Marketing, Product Design, and Cloud Services. Customer Satisfaction and the Highest Rate of Customer Retention make us one of the pioneers in the field. So, what are you waiting for? Let us discuss your ideas and our innovation in detail because catering to your requirements and converting it into a final product is our main goal.
        </p>
      </div>
      {/* <BadgesSection /> */}
      
    </section>

  )
}
