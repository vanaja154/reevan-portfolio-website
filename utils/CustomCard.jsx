import Image from "next/image";

export default function CustomCard({
  title,
  subtitle,
  tags = [],
  authorName,
  authorCompany,
  authorImage,
  mainImage,
  imagePosition = "left",
  customElement
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isImageLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image Section */}
      <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-lg ">
        <img
          src={mainImage}
          alt={title}
          className="w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-sm text-orange-500 font-medium">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mt-2">{title}</h3>

        {/* Subtitle or Custom Element */}
        <div className="mt-3">
          {customElement ? (
            customElement
          ) : (
            <p className="text-gray-500">{subtitle}</p>
          )}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 mt-6">
          <img
            src={authorImage}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-sm text-gray-500">{authorCompany}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
