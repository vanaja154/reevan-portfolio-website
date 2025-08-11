import CustomCard from "@/utils/CustomCard";

export default function CreativeWorkSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Creative work
        </h2>
        <p className="text-gray-600 mt-2">
          We have completed thousands of projects, some of them showing
          important projects here.
        </p>
      </div>

      {/* Card */}
      <CustomCard
        title="Creative business card design service by Reevan"
        tags={["UX", "UI", "Graphic Design"]}
        subtitle="Live view"
        authorName="Rocky Piyush"
        authorCompany="ABC Business"
        authorImage="/images/user4.jpg"
        mainImage="/images/Portfolio/portfolio-1.jpg"
        imagePosition="left"
        customElement={
          <img
            src="/images/customer-logo-1.png"
            alt="Live View"
            className="w-20 sm:w-24 h-auto mt-2"
          />
        }
      />
    </section>
  );
}
