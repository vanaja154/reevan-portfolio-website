import HighlightedText from '@/utils/HighlightedText';
import WorkCard from '@/utils/WorkCard';
import React from 'react'

export default function Works() {
  const works = [
    {
      title: "Creative business card",
      category: "UX, UI, Graphic Design",
      image: "/images/creative-work-1.jpg",
    },
    {
      title: "Creative business card",
      category: "UX, UI, Graphic Design",
      image: "/images/creative-work-2.jpg",
    },
    {
      title: "Creative business card",
      category: "UX, UI, Graphic Design",
      image: "/images/creative-work-3.jpg",
    },
    {
      title: "Creative business card",
      category: "UX, UI, Graphic Design",
      image: "/images/creative-work-4.jpg",
    },
    {
      title: "Creative business card",
      category: "UX, UI, Graphic Design",
      image: "/images/creative-work-5.jpg",
    },
  ];


  return (
    <section className="py-12 px-4 bg-black text-white">
      <p className="text-sm text-orange-500 text-center mb-2">QUALITY WORK</p>
      <h2 className="text-4xl font-bold text-center mb-12">
        Some of our <HighlightedText>Finest</HighlightedText> Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">

        {/* First 3 cards normal */}
        {works.slice(0, 3).map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            category={work.category}
            image={work.image}
          />
        ))}

        {/* Second row first card spans 2 columns */}
        <WorkCard
          title={works[3].title}
          category={works[3].category}
          image={works[3].image}
          extraClasses="md:col-span-2"
        />

        {/* Last card normal */}
        <WorkCard
          title={works[4].title}
          category={works[4].category}
          image={works[4].image}
        />
      </div>

      {/* <div className="text-center">
        <p className="text-lg mb-4">Take a look of our quality work</p>
        <CustomButton text="View All Work →" onClick={() => alert("View All Clicked")} />
      </div> */}
    </section>
  )
}
