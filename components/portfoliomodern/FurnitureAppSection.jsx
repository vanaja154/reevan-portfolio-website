import CustomCard from "@/utils/CustomCard";

export default function FurnitureAppSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <CustomCard
        title="Furniture iOS app kit developed in swift framework"
        tags={["iOS", "Android", "Swift"]}
        subtitle="View in app store"
        authorName="Rocky Piyush"
        authorCompany="ABC Business"
        authorImage="/images/user4.jpg"
        mainImage="/images/Portfolio/portfolio-1.jpg"
        imagePosition="right"
        customElement={
          <img
            src="/images/customer-logo-1.png"
            alt="Julako Dynamic"
            className="w-28 sm:w-32 h-auto mt-2"
          />
        }
      />
    </section>
  );
}
