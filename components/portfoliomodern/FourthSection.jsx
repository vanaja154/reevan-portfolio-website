import CustomCard from '@/utils/CustomCard'
import React from 'react'

export default function FourthSection() {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <CustomCard
           title="Multi Vendor shopping store readymade solution"
           tags={["Web Development, E-commerce, PHP"]}
           subtitle="View in app store"
           authorName="Rocky Piyush"
           authorCompany="ABC Business"
           authorImage="/images/user4.jpg"
           mainImage="/images/Portfolio/portfolio-3.jpg"
           imagePosition="left"
           customElement={
             <img
               src="/images/customer-logo-3.png"
               alt="Julako Dynamic"
               className="w-28 sm:w-32 h-auto mt-2"
             />
           }
         />
       </section>
  )
}
